import { getDatabase, ref, set } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-cfg';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export class User {
  constructor(userData) {
    this.userData = userData;
  }
  create() {
    createUserWithEmailAndPassword(
      auth,
      this.userData.email,
      this.userData.password
    )
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid + '/auth/'), this.userData);
      })
      .catch(error => {
        console.log(error.code);
      });
  }
  logIn() {
    if (!this.userData.email || !this.userData.password) {
      return;
    }
    signInWithEmailAndPassword(
      auth,
      this.userData.email,
      this.userData.password
    )
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        console.log(error);
      });
  }
  logOut() {
    const user = auth.currentUser;
    signOut(auth).then(() => {
      location.reload();
    });
  }
}
