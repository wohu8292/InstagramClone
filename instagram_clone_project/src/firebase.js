import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfuZA2mxT3HDUnCVNZ3AOTCHvMHDDM07k",
    authDomain: "instagram-clone-3cc6c.firebaseapp.com",
    databaseURL: "https://instagram-clone-3cc6c-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-3cc6c",
    storageBucket: "instagram-clone-3cc6c.appspot.com",
    messagingSenderId: "939629233027",
    appId: "1:939629233027:web:adad644e8209e6bff4ecb6",
    measurementId: "G-SWH9P1Y9TV"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}