import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
    apiKey: "AIzaSyA5rqDGw6qbp-3MsCRDWq9nD4i2HcjgInM",
    authDomain: "uni-iad.firebaseapp.com",
    databaseURL: "https://uni-iad-default-rtdb.firebaseio.com",
    projectId: "uni-iad",
    storageBucket: "uni-iad.appspot.com",
    messagingSenderId: "371769076480",
    appId: "1:371769076480:web:078a2bcf96c34f735c21e5"
};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const database = getDatabase(app)

export {
  auth,
  database
}