import couriers from './ContentsListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    couriers
});

export default rootReducer;