import React from "react";
import PropTypes from 'prop-types';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ContentsItem from '../../component/ContentsItem/ContentsItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import API from '../../api'


// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontalList = ( { categoryId } ) => {
  // const [items, setItems] = React.useState(getItems);
  // const [selected, setSelected] = React.useState([]);
  // const [position, setPosition] = React.useState(0);



  const [contents, setContents] = React.useState([]);
  const [size, setSize] = React.useState(10);
  const [sort, setSort] = React.useState('modify_date');
  const [order, setOrder] = React.useState('desc');



  // const isItemSelected = (id) => !!selected.find((el) => el === id);

  // const handleClick = (id) => ({ getItemById, scrollToItem }) => {
  //   const itemSelected = isItemSelected(id)

  //   setSelected((currentSelected) =>
  //     itemSelected
  //       ? currentSelected.filter((el) => el !== id)
  //       : currentSelected.concat(id)
  //   );
  // }



  React.useEffect(() => {
    getContentsList();
  }, []);

  const getContentsList = () => {
    API.getContentsNew(categoryId, sort, order, 1, size)
        .then((result) => {
          setContents(result.contents);
        })
        .catch((e) => {
          console.log('err:', e)
        })
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

          {contents.map((item) => <ContentsItem key={0} index={0} contentsName={item.contentsName} categoryName={item.categoryName} categoryHide={ categoryId > 0} /> )}



          {/* <ContentsItem key={0} index={0} contentsName={"아이언맨"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"어벤져스1"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"어벤져스2"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"어벤져스3"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} />
          <ContentsItem key={0} index={0} contentsName={"contentsName"} categoryHide={ categoryId > 0} /> */}

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
  categoryId: PropTypes.number
}

HorizontalList.defaultProps = {
  categoryId: 0
}

export default HorizontalList;

