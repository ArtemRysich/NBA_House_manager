
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export default class User {
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
