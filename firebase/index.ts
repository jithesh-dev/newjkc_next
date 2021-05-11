import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC9covqckG_l6I0109uEJ3_0z1HVuBybfQ",
  authDomain: "newjkc-dd0ca.firebaseapp.com",
  projectId: "newjkc-dd0ca",
  storageBucket: "newjkc-dd0ca.appspot.com",
  messagingSenderId: "866607784889",
  appId: "1:866607784889:web:4e5547eb6fced0e29a8c68",
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
