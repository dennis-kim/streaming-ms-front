import { takeEvery, put, call } from 'redux-saga/effects';
import * as actionType from '../../../types/actionTypes';
import api from '../../../api';
import allAction from '../action/index';

function* getCourier() {
    console.log("택배사 불러오기 성공");
    try{
        const { data } = yield call(api.getContents);
        console.log('try:', data);
        yield put(allAction.loadCourierSuccess(data));
    }catch(error){
        yield put(allAction.loadCourierFail(error));
    }
}

function* rootSaga(){
    yield takeEvery(actionType.LOAD_CONTENTS, getCourier);
}

export default rootSaga;