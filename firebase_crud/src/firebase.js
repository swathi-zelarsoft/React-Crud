import * as firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyCrXntygrVcEbyeWdJThmkmF3KuiipIk8s",
  authDomain: "test-d5a67.firebaseapp.com",
  projectId: "test-d5a67",
  storageBucket: "test-d5a67.appspot.com",
  messagingSenderId: "276956573667",
  appId: "1:276956573667:web:0d31b5031359422774bad6"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();