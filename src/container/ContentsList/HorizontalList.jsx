import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ContentsItem from '../../component/ContentsItem/ContentsItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function HorizontalList() {
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
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>
          <ContentsItem key={0} index={0} contentsName={"contentsName"}/>

        </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    // TODO 숨김 처리, 클릭 이벤트 필요함
    <ArrowLeftIcon aria-hidden={isFirstItemVisible} color="primary"/>
    // <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    //   Left
    // </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    // TODO 숨김 처리, 클릭 이벤트 필요함
    <ArrowRightIcon color="primary"/>
    // <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
    // //   Right
    // // </Arrow>
  );
}

export default HorizontalList;

