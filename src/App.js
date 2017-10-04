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
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  setNewNumber(){
    this.setState({data: this.state.data + 1})
  }

  render(){
    return(
      <div>
        <h1> Components Lifecylce </h1>
          <button onClick={this.setNewNumber} >Update Numbers</button>
          <NumberComponent myNumber = {this.state.data}/>
      </div>
    );
  }
}

class NumberComponent extends Component {
// Just before rendering
  componentWillMount(){
    console.log('WILL MOUNT');
  }
// After rendering
  componentDidMount(){
    console.log('DID MOUNT');
  }
// Just about receive the props from the parent
  componentWillReceiveProps(newProps){
    console.log('WILL RECIEVE PROPS');
  }
// True are false
  shouldComponentUpdate(newProps, nextState){
    console.log('SHOULD COMPONENT UPDATE');
    return true;
  }
// if component needs to update it will
  componentWillUpdate (newProps, nextState){
    console.log('WILL UPDATE');

  }
// Just after updating
  componentDidUpdate(){
    console.log('DID UPDATE');
  }
// When component mounts
  componentWillUnmount(){
    console.log('WILL UNMOUNT');

  }

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
