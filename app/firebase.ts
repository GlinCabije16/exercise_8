// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBEq4aIdZimRxr-1Ub2it3xW3uOs_omPpA",
  authDomain: "exercise-9-b4af5.firebaseapp.com",
  projectId: "exercise-9-b4af5",
  storageBucket: "exercise-9-b4af5.appspot.com",
  messagingSenderId: "478129452445",
  appId: "1:478129452445:web:552d6b0f7b516350292b74",
  measurementId: "G-C7GXM4X46P"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
