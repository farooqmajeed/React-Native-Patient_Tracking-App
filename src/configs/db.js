import firebase from 'firebase';
   var config = {
            apiKey: "AIzaSyAR9T-1CRpZJ3e3_X7V7GHHpaMHuLilJCk",
            authDomain: "patient-tracking-app.firebaseapp.com",
            databaseURL: "https://patient-tracking-app.firebaseio.com",
            projectId: "patient-tracking-app",
            storageBucket: "patient-tracking-app.appspot.com",
            messagingSenderId: "576190278269"
        };
        firebase.initializeApp(config);


export const database = firebase.database();

export const auth = firebase.auth();

export default firebase;