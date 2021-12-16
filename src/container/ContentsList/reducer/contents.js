import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchContentsApi } from "../../../api/contentsTestAPI";

import { startLoading, endLoading } from "../../reducer/loading";

// 액션 타입 상수 선언
const FETCH_CONTENTS_LIST_SUCCESS = "contents/FETCH_CONTENTS_LIST_SUCCESS";
const FETCH_CONTENTS_LIST_FAILURE = "contents/FETCH_CONTENTS_LIST_FAILURE";

export const FETCH_CONTENTS_LIST = "contents/FETCH_CONTENTS_LIST";

// 목록 액션 생성 함수
export const fetchListSuccess = createAction(FETCH_CONTENTS_LIST_SUCCESS, data => data);
export const fetchListFailure = createAction(FETCH_CONTENTS_LIST_FAILURE, e => e);
// 목록 조회 액션 생성 함수
export const fetchContentsList = createAction(FETCH_CONTENTS_LIST, categoryName => categoryName);

// 목록 조회 태스크
function* fetchContentsListSaga(action) {
    yield put(startLoading(FETCH_CONTENTS_LIST)) // 목록 조회 전 로딩 시작( FETCH_ITEM_LIST 에 대한 로딩 )
    try {
        const response = yield call(fetchContentsApi, action.payload)   // todo api 개발후 적용해야함
        yield put(fetchListSuccess(response.data))
    } catch(e) {
        yield put(fetchListFailure(e))
    }
    yield put(endLoading(FETCH_CONTENTS_LIST))  // FETCH_ITEM_LIST 에 대한 로딩 종료
}

// 메인 컨텐츠 목록 Saga 외부 사용 함수
export function* contentsSaga() {
    // 목록 조회
    yield takeLatest(FETCH_CONTENTS_LIST, fetchContentsListSaga)
}

// 모듈 초기 상태
const initialState = {
    contents: [],
    error: null
}

// 리듀서 함수 정의
const contents = handleActions(
    {
        // 목록 조회 상태 변경
        [FETCH_CONTENTS_LIST_SUCCESS]: (state, action) => ({
            ...state,
            contents: action.payload
        }),
        [FETCH_CONTENTS_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        }),
    },
    initialState
)

export default contents