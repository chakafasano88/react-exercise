import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'// This is where you call your app

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link style={{color: "red"}} className="dog" to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <hr/>

      <App />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/blog" component={Blog}/>

    </div>
  </Router>,
  document.getElementById('root')
);
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 10000)





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
