import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPtY0RdNILUWqXoW1LLY5gjh20Q9wIKpA",
  authDomain: "tienda-9464b.firebaseapp.com",
  projectId: "tienda-9464b",
  storageBucket: "tienda-9464b.appspot.com",
  messagingSenderId: "130811981993",
  appId: "1:130811981993:web:10785f86f1c881a0e979b8",
  measurementId: "G-F5GQ3JE0BK",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
