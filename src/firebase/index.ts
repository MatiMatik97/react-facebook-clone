import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyASuTN7VMdAzJbgzcSOGA4rcdWoEE_P0EU",
  authDomain: "facebook-clone-app-8187a.firebaseapp.com",
  databaseURL: "https://facebook-clone-app-8187a.firebaseio.com",
  projectId: "facebook-clone-app-8187a",
  storageBucket: "facebook-clone-app-8187a.appspot.com",
  messagingSenderId: "940127117880",
  appId: "1:940127117880:web:794bc0415bea0c73cb3ccd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
