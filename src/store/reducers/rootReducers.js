import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PatientFormReducer from './PatientFormReducer';
import PatientReducer from './PatientReducer'


const rootReducer = combineReducers({
  auth: AuthReducer,
  patients: PatientReducer,
  patient: PatientFormReducer
});
export default rootReducer;