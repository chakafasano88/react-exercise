import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This is where you call your app

ReactDOM.render(
  <App />, document.getElementById('root'));
registerServiceWorker();




// THIS WORKS, HOWEVER, NOT GOOD PRACTICE. USE COMPONENTS
// function tick(){
//   const element = (
//     <div>
//       <h1> Hello World </h1>
//       <h2> The Current Time Is: {new Date().toLocaleTimeString()} </h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById("root"))
// }
//
// setInterval(tick, 1000)
