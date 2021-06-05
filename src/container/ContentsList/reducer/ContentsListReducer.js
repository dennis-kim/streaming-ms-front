import * as actionType from '../../../types/actionTypes';

const couriers = (state = [], action) => {
    switch(action.type){
        case actionType.LOAD_CONTENTS_SUCCESS:
            return [...state, ...action.couriers];
        case actionType.LOAD_CONTENTS_FAIL:
            return [...state, action.error];
        default:
            return state;
    }
};

export default couriers;