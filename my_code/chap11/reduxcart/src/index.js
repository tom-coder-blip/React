import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

let destination = document.querySelector("#container");
let store = createStore(cartReducer); //This line sets up Redux to manage the state of your application.
//createStore() is a Redux function that creates a store.
//cartReducer is the reducer function 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);






