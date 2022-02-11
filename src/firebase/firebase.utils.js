

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, writeBatch, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2P_vilXDJCFlLY7GVyDQkzBTCh_CSMSU",
  authDomain: "redux-app-8c5ce.firebaseapp.com",
  projectId: "redux-app-8c5ce",
  storageBucket: "redux-app-8c5ce.appspot.com",
  messagingSenderId: "1020105462767",
  appId: "1:1020105462767:web:2d0aab8fb233e7552c5c1a",
  measurementId: "G-0R66E3NS2N",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();

export const auth = getAuth(app);

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const forgotPassword = email => {
  return sendPasswordResetEmail(auth, email, {
    url: `http://localhost:3000/login`,
  });
};

export const resetPassword = (oobCode, newPassword) => {
  return confirmPasswordReset(auth, oobCode, newPassword);
};

export const logout = () => {
  return signOut(auth);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};
