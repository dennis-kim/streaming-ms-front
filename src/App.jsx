import React, { useState, useEffect } from 'react';
import SearchScreen from './container/ListStreaming/SearchScreen/SearchScreen';
import List from './container/ListStreaming/ListScreen/ListScreen';
import Tree from './container/ListStreaming/TreeListScreen/TreeListScreen';
import api from './api';


const initDirectories = 
  [
    {"dirName":"documentary","dirPath":"/volume1/documentary","updateDate":"2020-03-03 03:56 AM","depth":1,"child":[{"dirName":"Our.Universe. 우주 - 매혹적인 세계 _2013","dirPath":"/volume1/documentary/Our.Universe. 우주 - 매혹적인 세계 _2013","updateDate":"2018-12-02 07:35 PM","depth":2,"child":[]},{"dirName":"planet earth","dirPath":"/volume1/documentary/planet earth","updateDate":"2019-05-15 10:27 AM","depth":2,"child":[]},{"dirName":"허블 3D _2010","dirPath":"/volume1/documentary/허블 3D _2010","updateDate":"2020-03-03 03:57 AM","depth":2,"child":[]}]}
  ];

const initUpdate = 
  [
    {"dirName":"마크맨 _2021","dirPath":"/volume2/movie/2021/마크맨 _2021","updateDate":"2021-04-14 11:06 PM","depth":3,"child":[]},{"dirName":"톰과 제리 _2021","dirPath":"/volume2/movie/2021/톰과 제리 _2021","updateDate":"2021-04-04 05:13 AM","depth":3,"child":[]}
  ];

function App() {
  const [action, setAction] = useState('update');
  const [actionName, setActionName] = useState('업데이트');
  const [searchWord, setSearchWord] = useState('');
  const [tree, setTree] = useState([]);
  const [contents, setContents] = useState([]);

  

  useEffect( () => {
    setTree(initDirectories);
    // api.getDirectories()
    //     .then((response) => {
    //       setTree(response.data);
    //     })
    //     .catch((e) => {
    //     })
    //     .finally(function () {
    //       setTree(initDirectories);
    //     })
  }, [])

  useEffect( () => {
    setContents(initUpdate);
    // api.getContents()
    //       .then((response) => {
    //         setContents(response.data);
    //       })
    //       .catch((e) => {
    //       })
    //       .finally(function () {
    //       })
  }, [])  

  // Listner
  const handlerListClick = () => {
    if(action === 'update') {
      setAction('list')
      setActionName('전체');
    }else {
      setAction('update');
      setActionName('업데이트')
    }
  }

  const handlerTextFieldChange = (value) => {
    if(value.length <= 15) {
      setSearchWord(value);
    }
  }
  const handlerEnter = () => {
    alert('검색');
  }

  const switchScreen = () => {
    switch (action) {
      case 'update':
        return <Tree treeData={tree} />
    
      default:
        return <List contentsData={contents}/>
    }
  }
  return (
    <>
      <div>
        <SearchScreen 
          actionName={actionName} 
          searchWord={searchWord} 
          handlerEnter={handlerEnter} 
          handlerTextFieldChange={handlerTextFieldChange} 
          handlerListClick={handlerListClick} 
        />
      </div>
      <div>
        { switchScreen() }
      </div>
    </>
  );
}

export default App;
