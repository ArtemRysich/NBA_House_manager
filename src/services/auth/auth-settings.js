import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase-cfg';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user);
  } else {
    // User is signed out
    // ...
  }
});
