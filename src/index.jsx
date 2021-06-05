import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from "./App";
import rootSaga from './container/ContentsList/sagas';

import ContentsListReducer from './container/ContentsList/reducer/ContentsListReducer'


const sagaMiddleware = createSagaMiddleware();



const rootReducer = combineReducers({
    ContentsListReducer,

});

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
            ? a => a
            : window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));