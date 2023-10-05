import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnF_Mns7Kb5oa8W7kFTm3d6qM9tMAfFLI",
  authDomain: "jet-landing-111aa.firebaseapp.com",
  projectId: "jet-landing-111aa",
  storageBucket: "jet-landing-111aa.appspot.com",
  messagingSenderId: "696091557994",
  appId: "1:696091557994:web:dd4692d889f90589954a13",
  measurementId: "G-ZG21TV2D7Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
