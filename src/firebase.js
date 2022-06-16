// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOinOf9l_dnP_GZBaWKeFy0NT0RgxqPkU",
    authDomain: "uploadingfile-edbaa.firebaseapp.com",
    projectId: "uploadingfile-edbaa",
    storageBucket: "uploadingfile-edbaa.appspot.com",
    messagingSenderId: "932593645611",
    appId: "1:932593645611:web:8b5b522977bbdf1461d26e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);