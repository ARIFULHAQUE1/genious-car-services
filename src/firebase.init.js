// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWwGOhdFRFhWJxYvqNiXz7luUItX2uBxw",
  authDomain: "genious-car-services-8741a.firebaseapp.com",
  projectId: "genious-car-services-8741a",
  storageBucket: "genious-car-services-8741a.appspot.com",
  messagingSenderId: "493224495499",
  appId: "1:493224495499:web:495257289057d03507878e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
export default auth