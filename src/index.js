import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let textarea = document.getElementById('textarea');
// textarea.oninput = handleTextareaChange;

// var newTask

// function handleTextareaChange() {
//   newTask = 'new one'

//   alert('Adding Task!');
// }

let button = document.getElementById('button1');
button.onclick = handleButtonClick;

function handleButtonClick() {
  // newTask = 'new one'

  alert('Adding Task!');
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
