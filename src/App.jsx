import { useState } from 'react'
import './App.css'

import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCn05i69I4QvHLIHdYT1LoBf53Ni30nyxs",
  authDomain: "handover-ebc43.firebaseapp.com",
  projectId: "handover-ebc43",
  storageBucket: "handover-ebc43.firebasestorage.app",
  messagingSenderId: "30280189070",
  appId: "1:30280189070:web:f0b18b1f76bf7f5cd175df",
  measurementId: "G-GJXB8FQSF1"
};

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    </>
  )

}

export default App
