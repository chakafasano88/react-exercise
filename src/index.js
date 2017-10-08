import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'// This is where you call your app

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><NavLink style={{color: "red"}} className="dog" to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>
      </Switch>
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
