import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from "./App";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './container/ContentsList/sagas';
import ContentsListReducer from './container/ContentsList/reducer';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    ContentsListReducer,
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