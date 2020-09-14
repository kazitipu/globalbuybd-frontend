import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD_y8loznUuaKya6oq1OLwq1KhcG44VKC4",
  authDomain: "globalbuybd-auth.firebaseapp.com",
  databaseURL: "https://globalbuybd-auth.firebaseio.com",
  projectId: "globalbuybd-auth",
  storageBucket: "globalbuybd-auth.appspot.com",
  messagingSenderId: "676138681404",
  appId: "1:676138681404:web:3267a9d87604d4309f6f39",
  measurementId: "G-35EHNYN8E9"
};
firebase.initializeApp(firebaseConfig);

export var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export var facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account", display: 'popup' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
