import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_vKzOKtQYcN6f6kBKtRReEeXEDfjmCjA",
  authDomain: "crwn-clothing-ec8d6.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ec8d6.firebaseio.com",
  projectId: "crwn-clothing-ec8d6",
  storageBucket: "crwn-clothing-ec8d6.appspot.com",
  messagingSenderId: "1011741162630",
  appId: "1:1011741162630:web:74d87b53dcd602ab496507"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); // always trigger the google popup whenever we use the google auth provider for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;