import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//This is a Firebase configuration object used to connect a web or mobile app to a specific Firebase project. 
// It contains unique credentials and identifiers like API key, project ID, and app ID. 
// These values allow the app to access Firebase services such as authentication, database, and storage.
const firebaseConfig = {
  //firebase config values
  apiKey: "AIzaSyBURCdT9e6u3Q5q_Y0CVT5yRnXc2Z70JSw",
  authDomain: "react-proj1-c8cb3.firebaseapp.com",
  projectId: "react-proj1-c8cb3",
  storageBucket: "react-proj1-c8cb3.firebasestorage.app",
  messagingSenderId: "851050022674",
  appId: "1:851050022674:web:120a0099ec7c5aafe515cb",
  measurementId: "G-JZ5WRLZDM7"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
