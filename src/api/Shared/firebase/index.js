import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFLZe7Ekdi22HSiGC-WS4Q8Bgte2L39h8",
    authDomain: "fandashticgrocery.firebaseapp.com",
    databaseURL: "https://fandashticgrocery.firebaseio.com",
    projectId: "fandashticgrocery",
    storageBucket: "fandashticgrocery.appspot.com",
    messagingSenderId: "797109517906",
    appId: "1:797109517906:web:027433feab1af3739ca98b",
    measurementId: "G-NWCVDJVKJG"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };