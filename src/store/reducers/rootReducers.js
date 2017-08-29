import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PatientFormReducer from './PatientFormReducer';
import PatientReducer from './PatientReducer'
import PatientSearchReducer from './patientSearchReducer';


const rootReducer = combineReducers({
  auth: AuthReducer,
  patients: PatientReducer,
  patient: PatientFormReducer,
  search: PatientSearchReducer
});
export default rootReducer;