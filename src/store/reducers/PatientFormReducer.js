import {
    PATIENT_UPDATE,
    PATIENT_CREATE,
    PATIENT_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    gender: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PATIENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case PATIENT_CREATE:
            return INITIAL_STATE;
        case PATIENT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};  