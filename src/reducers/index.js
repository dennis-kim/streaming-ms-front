import { combineReducers } from "redux" ;
import { all } from "redux-saga/effects"; 

import loading from "../container/reducer/loading";
// import item, { contentsSaga } from "./item";


const rootReducer = combineReducers({
    loading
    // , item
})

export function* rootSaga() {   // saga(비동기 사용시에 추가)
    yield all([
        // contentsSaga()
    ])
}

export default rootReducer;