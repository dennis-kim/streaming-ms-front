import React from "react";
import PropTypes from 'prop-types';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ContentsItem from '../../ContentsItem/ContentsItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import API from '../../../api'


const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontalList = ( { categoryId, contents } ) => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);



  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }




  return (
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          // onWheel
        >
{/* 
                        {[...Array(contents)].map((_, i) => {
                            return (
                                <li key={i}>
                                    <ContentsItem key={i} index={i} contentsName={"contentsName"}/>
                                </li>
                            )
                        })}

 */}

          {contents.map((item) => <ContentsItem key={0} index={0} item={item} categoryHide={ categoryId > 0} /> )}
        </ScrollMenu>
  );
}

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    // TODO 숨김 처리, 클릭 이벤트 필요함
    <ArrowLeftIcon aria-hidden={isFirstItemVisible} color="primary"/>
    // <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    //   Left
    // </Arrow>
  );
}

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    // TODO 숨김 처리, 클릭 이벤트 필요함
    <ArrowRightIcon color="primary"/>
    // <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
    // //   Right
    // // </Arrow>
  );
}

HorizontalList.propType = {
  categoryId: PropTypes.number,
  contents: PropTypes.array
}

HorizontalList.defaultProps = {
  categoryId: 0,
  contents: []
}

export default HorizontalList;

