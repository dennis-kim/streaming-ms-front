import * as actionType from '../../../types/actionTypes';

export const loadCourier = () => {
    return{
        type: actionType.LOAD_CONTENTS
    };
};

export const loadCourierSuccess = couriers => {
    return{
        type: actionType.LOAD_CONTENTS_SUCCESS,
        couriers: couriers
    };
};

export const loadCourierFail = error => {
    return{
        type: actionType.LOAD_CONTENTS_FAIL,
        error
    };
};