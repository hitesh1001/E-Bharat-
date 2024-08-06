import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY3aGx1OxDDLaIGnoW6ZaMCsdbVCtoRQQ",
  authDomain: "myfirstapp-ff3b0.firebaseapp.com",
  projectId: "myfirstapp-ff3b0",
  storageBucket: "myfirstapp-ff3b0.appspot.com",
  messagingSenderId: "553623221784",
  appId: "1:553623221784:web:c9695782170ec43837f56d"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;