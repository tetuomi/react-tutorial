import firebase from 'firebase';
import {firebaseConfig} from "./config";



const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();