import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from "./App";
import reducer from './container/ContentsList/reducer'

const rootReducer = combineReducers({
    contents: reducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));