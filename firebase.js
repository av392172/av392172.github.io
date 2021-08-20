import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBfYw2Rl0piAp8v4qnsyBO-Ik3giTFpHI",
    authDomain: "my-facebook-835b2.firebaseapp.com",
    projectId: "my-facebook-835b2",
    storageBucket: "my-facebook-835b2.appspot.com",
    messagingSenderId: "343590394638",
    appId: "1:343590394638:web:3d7d1dac97667e5152155f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };