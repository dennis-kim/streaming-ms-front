import { combineReducers } from "redux" ;
import { all } from "redux-saga/effects"; 

import loading from "../container/reducer/loading";
import mainContents, { mainContentsSaga } from "../container/Main/reducer/contents";
import contents, { contentsSaga } from "../container/ContentsList/reducer/contents";


const rootReducer = combineReducers({
    loading
    , mainContents
    , contents
})

export function* rootSaga() {   // saga(비동기 사용시에 추가)
    yield all([
        mainContentsSaga()
        , contentsSaga()
    ])
}

export default rootReducer;