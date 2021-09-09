import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// import "firebase/firestore";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const database = firebase.database();
// export const dbService = firebase.firestore();
// export const storageService = firebase.storage();
