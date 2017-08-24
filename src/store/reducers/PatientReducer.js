import {
    PATIENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PATIENT_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
            return state;
        default:
            return state;
    }
};