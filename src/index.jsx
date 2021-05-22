import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './container/ListStreaming/reducer';
import App from "./App";

const rootReducer = combineReducers({
    listStreaming : listReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));