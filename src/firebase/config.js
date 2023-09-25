import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuVTQkIy0D9n16IOJGZtVQ2tpuV2YrrU4",
  authDomain: "task-management-af32c.firebaseapp.com",
  projectId: "task-management-af32c",
  storageBucket: "task-management-af32c.appspot.com",
  messagingSenderId: "607762216713",
  appId: "1:607762216713:web:2436904d3ca9afc3b3c5d8"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };