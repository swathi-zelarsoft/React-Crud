import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA-MB617jubZ6UEA88rLdyWYbG6cGOZuVw",
  authDomain: "react-crud-4ccd1.firebaseapp.com",
  databaseURL: "https://react-crud-4ccd1-default-rtdb.firebaseio.com",
  projectId: "react-crud-4ccd1",
  storageBucket: "react-crud-4ccd1.appspot.com",
  messagingSenderId: "962026649466",
  appId: "1:962026649466:web:2244eebbbd6675041a48c3"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();