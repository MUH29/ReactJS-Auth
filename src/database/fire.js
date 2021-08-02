import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDgWG_kIPaY0uAt-nmzOVPHVb4Ylqy-DLo",
    authDomain: "react-auth-d0c51.firebaseapp.com",
    projectId: "react-auth-d0c51",
    storageBucket: "react-auth-d0c51.appspot.com",
    messagingSenderId: "854572798807",
    appId: "1:854572798807:web:2b8f8f35273f56e4bd2412"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;