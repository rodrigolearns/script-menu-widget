import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

var newDiv = document.createElement("div");

// Optionally set some properties
newDiv.id = "newDivId";
newDiv.className = "new-div-class";
newDiv.textContent = "This is a new div.";

// Attach the new div to the document body
document.body.appendChild(newDiv);

const root = ReactDOM.createRoot(newDiv);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
