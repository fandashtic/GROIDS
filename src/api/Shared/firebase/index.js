import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAJ5TlTOleBYz-Etonr5RGYbU2NuFLog9g",
    authDomain: "grodis-d88d3.firebaseapp.com",
    databaseURL: "https://grodis-d88d3.firebaseio.com",
    projectId: "grodis-d88d3",
    storageBucket: "grodis-d88d3.appspot.com",
    messagingSenderId: "1056365641125",
    appId: "1:1056365641125:web:3680406e57a7e9d6f73c4c",
    measurementId: "G-J481M4XLWR"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };