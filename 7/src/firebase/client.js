import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyAGcqD7ZHamqz1DV_BXmHKBOZIwyc5x21w",
    authDomain: "reactproyecto-2586d.firebaseapp.com",
    projectId: "reactproyecto-2586d",
    storageBucket: "reactproyecto-2586d.appspot.com",
    messagingSenderId: "915184776951",
    appId: "1:915184776951:web:7be96f86492b1b152005f2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);