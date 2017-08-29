import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    PATIENT_CREATE,
    PATIENT_UPDATE,
    PATIENT_FETCH_SUCCESS,
    PATIENT_SAVE_SUCCESS,
    PATIENT_SEARCH_SUCCESS
} from './types';
import { AsyncStorage } from 'react-native';

export const patientUpdate = ({ prop, value }) => {
    return {
        type: PATIENT_UPDATE,
        payload: { prop, value }
    };
};
export const patientCreate = ({ name, phone, gender, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/patients`)
            .push({ name, phone, gender, shift })
            .then(() => {
                dispatch({ type: PATIENT_CREATE });
                Actions.patientList({ type: 'reset' })
            });
    };
};

export const patientFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/patients`)
            .on('value', snapshot => {
                dispatch({ type: PATIENT_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const patientSave = ({ name, phone, gender, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/patients/${uid}`)
            .set({ name, phone, gender, shift })
            .then(() => {
                dispatch({ type: PATIENT_SAVE_SUCCESS })
                Actions.patientList({ type: 'reset' });
            });
    };
};
export const patientDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/patients/${uid}`)
            .remove()
            .then(() => {
                Actions.patientList({ type: 'reset' });
            })
    }
}
export const onPatientSearch = (data) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/patients`)
            .orderByChild("name").startAt(data)
            .on('value', snapshot => {
                dispatch({ type: PATIENT_SEARCH_SUCCESS, payload: snapshot.val() });
            })
    }
}


