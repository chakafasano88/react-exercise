import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// USING STATE AND PROPS IN A COMPONENT TO PASS IN DATA
//==== THIS COMPONENT INPUTS ALL OTHER COMPONENTS WITH XML JSX ====
class App extends Component {
  constructor(props){
    super(props);
    // point in time value
    this.state = {
      headerText: "Welcome To React",
      contentText: "In this lecture"
    }
  }
  render() {
    return (
      <div className="App">
    {
      // <h1>{this.state.headerText}</h1>
      // <p>{this.state.contentText}</p>
    }
        <Header header={this.state.headerText}/>
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0,
    };
    // Bind class parameters to constructor
    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);

  }

  updateMyState() {
    // Accesses the "count" in state object
    var count = this.state.count;
    // Adds 1 to count
    count++;
    // Outputs a string plus 1
    var item = "Click -" + count;
    // puts "data" property in variable
    var myArray = this.state.data;
    // pushes the array
    myArray.push(item);
    this.setState({date: myArray, count: count});
  }

  forceUpdateRandomNumber(){
    this.forceUpdate();
  }
  // This allows you to target DOM objects and update CSS or JS
  // Using the React DOM to update
  // FIND DOM NODE()
  findMyDOMNode(){
    let myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }



  render(){
    return(
      <div>
      <h1> Components api Lecture </h1>
        <button onClick={this.updateMyState}>Click </button>
        <h4>  State Data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandomNumber}> Random Number</button>
        <h4>Random Number is: {Math.random()}</h4>
        <button onClick={this.findMyDOMNode}>Find DOM Node</button>
        <div id="myDiv" >This is my div</div>
      </div>
    );
  }
}

export default App;
