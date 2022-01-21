import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const ConfigPage = {

    apiKey: "AIzaSyCUCbJ40ES8K9-bi--nCpJ5qyufikQtjHM",
    authDomain: "crw-clothing-a8adf.firebaseapp.com",
    projectId: "crw-clothing-a8adf",
    storageBucket: "crw-clothing-a8adf.appspot.com",
    messagingSenderId: "682954975273",
    appId: "1:682954975273:web:4c6a85ad3367946f9d9438",
    measurementId: "G-7BM1B5JWXZ"

};

firebase.initializeApp(ConfigPage);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;