import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../../api';
import allAction from '../action/index';

function* getCourier() {
    console.log("택배사 불러오기 성공");
    try{
        const { data } = yield call(api.getContents());
        console.log(data);
        yield put(allAction.loadCourierSuccess(data));
    }catch(error){
        yield put(allAction.loadCourierFail(error));
    }
}

function* rootSaga(){
    yield takeEvery("LOAD_COURIER", getCourier);
}

export default rootSaga;