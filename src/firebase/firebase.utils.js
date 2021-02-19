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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); // always trigger the google popup whenever we use the google auth provider for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


// query -> 2 objects -> reference and snapshot 
// doc ref -> can perfom crud operations -> docRef.get() -> doc Snapshot
// col ref -> collectionRef.get() -> query snapshot