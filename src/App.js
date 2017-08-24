import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
// import reducers from './reducers';
// import ReduxThunk from 'redux-thunk';
import Router from './Router';
import store from './store/store'


class App extends Component {
    // componentWillMount() {
    //     var config = {
    //         apiKey: "AIzaSyAR9T-1CRpZJ3e3_X7V7GHHpaMHuLilJCk",
    //         authDomain: "patient-tracking-app.firebaseapp.com",
    //         databaseURL: "https://patient-tracking-app.firebaseio.com",
    //         projectId: "patient-tracking-app",
    //         storageBucket: "patient-tracking-app.appspot.com",
    //         messagingSenderId: "576190278269"
    //     };
    //     firebase.initializeApp(config);
    // }

    render() {
        // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
                <Router />
            </Provider >
        );
    };
}

export default App;