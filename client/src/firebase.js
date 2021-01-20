import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBGUp4zilPT818SES7mxm2Djkfh-ApcH74",
    authDomain: "customizeshoes-d37f3.firebaseapp.com",
    databaseURL: "https://customizeshoes-d37f3.firebaseio.com",
    projectId: "customizeshoes-d37f3",
    storageBucket: "customizeshoes-d37f3.appspot.com",
    messagingSenderId: "320919758826",
    appId: "1:320919758826:web:b7925ae3520d0f46577493",
    measurementId: "G-ZWJ6H0R18E"
  };
  // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
  

export default firebase;