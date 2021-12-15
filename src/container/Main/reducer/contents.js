import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchMainContentsApi } from "../../../api/contentsTestAPI";

import { startLoading, endLoading } from "../../reducer/loading";

// 액션 타입 상수 선언
const FETCH_MAIN_CONTENTS_LIST_SUCCESS = "main/contents/FETCH_MAIN_CONTENTS_LIST_SUCCESS";
const FETCH_MAIN_CONTENTS_LIST_FAILURE = "main/contents/FETCH_MAIN_CONTENTS_LIST_FAILURE";

export const FETCH_MAIN_CONTENTS_LIST = "main/contents/FETCH_MAIN_CONTENTS_LIST";

// 목록 액션 생성 함수
export const fetchListSuccess = createAction(FETCH_MAIN_CONTENTS_LIST_SUCCESS, data => data);
export const fetchListFailure = createAction(FETCH_MAIN_CONTENTS_LIST_FAILURE, e => e);
// 목록 조회 액션 생성 함수
export const fetchMainContentsList = createAction(FETCH_MAIN_CONTENTS_LIST);

// 목록 조회 태스크
function* fetchMainContentsListSaga() {
    yield put(startLoading(FETCH_MAIN_CONTENTS_LIST)) // 목록 조회 전 로딩 시작( FETCH_ITEM_LIST 에 대한 로딩 )
    try {
        const response = yield call(fetchMainContentsApi)   // todo api 개발후 적용해야함
        yield put(fetchListSuccess(response.data))
    } catch(e) {
        yield put(fetchListFailure(e))
    }
    yield put(endLoading(FETCH_MAIN_CONTENTS_LIST))  // FETCH_ITEM_LIST 에 대한 로딩 종료
}

// 메인 컨텐츠 목록 Saga 외부 사용 함수
export function* mainContentsSaga() {
    // 목록 조회
    yield takeLatest(FETCH_MAIN_CONTENTS_LIST, fetchMainContentsListSaga)
}

// 모듈 초기 상태
const initialState = {
    contents: {},
    /*
        contents : {
            0: []
            , 1: []
            , 2: []
        }
    */

    error: null
}

// 리듀서 함수 정의
const mainContents = handleActions(
    {
        // 목록 조회 상태 변경
        [FETCH_MAIN_CONTENTS_LIST_SUCCESS]: (state, action) => ({
            ...state,
            contents: action.payload
        }),
        [FETCH_MAIN_CONTENTS_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        }),
    },
    initialState
)

export default mainContents