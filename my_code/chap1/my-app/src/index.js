//index.js tells React where to show the content(inside the root div on the webpage)

import React from 'react'; //Brings in necessary tools and files
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//display the App component inside the root element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //<React.StrictMode> is a special wrapper that helps you find bugs and potential problems during development. It does not affect the user interface.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(); //help you track app performance

