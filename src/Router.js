import React from 'react';
import { View, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components//Auth/LoginForm';
import SignupForm from './components/Auth/SignUp';
import Dashboard from './components/dashboard';
import ForgotPassword from './components/Auth/ForgotPassword';
import AddPatient from './components/patients/AddPatients';
import PatientForm from './components/patients/PatientForm';
import UpdatePatient from './components/patients/UpdatePatients';
import PatientList from './components/patients/PatientList';
import SearchPatients from './components/patients/SearchPatients';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>

            <Scene key="auth">
                <Scene key="login" component={LoginForm} hideNavBar={true} initial />
                <Scene key="signup" component={SignupForm} hideNavBar={true} />
                <Scene key="forgotPassword" component={ForgotPassword} hideNavBar={true} />
            </Scene>


            <Scene key="main">
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} />
                <Scene
                    navigationBarStyle={{ backgroundColor: '#4BB543' }}
                    onRight={() => Actions.dashboard()}
                    rightTitle="Add"
                    key="patientList"
                    component={PatientList}
                    title="Patients List"
                    initial
                />
                <Scene key="addPatient" component={AddPatient} hideNavBar={true} />
                <Scene key="updatePatient" component={UpdatePatient} hideNavBar={true} />
                <Scene key="searchPatient" component={SearchPatients} hideNavBar={true} />

            </Scene>

        </Router>
    );
};

export default RouterComponent;

