import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase configuration
// Get this from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyC0LkB9bSmK2mz5tKaH0HuHZTupfP0-WH8",
  authDomain: "fir-project-cbcb8.firebaseapp.com",
  projectId: "fir-project-cbcb8",
  storageBucket: "fir-project-cbcb8.firebasestorage.app",
  messagingSenderId: "643156553376",
  appId: "1:643156553376:web:5c30f6dc68ef9082bca3c5",
  measurementId: "G-R63DXB989K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

