import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8fsVLF__uwj4m7hRkmN_0eIcQQZ5olhQ",
  authDomain: "whatsupclone-b78ca.firebaseapp.com",
  projectId: "whatsupclone-b78ca",
  storageBucket: "whatsupclone-b78ca.appspot.com",
  messagingSenderId: "437841279070",
  appId: "1:437841279070:web:914ec68ec38d04d6c91ccf",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
