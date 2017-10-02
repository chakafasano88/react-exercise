import React, { Component } from 'react';
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
        <Content content={this.state.contentText}/>
      </div>
    );
  }
}

// Use default props to display something
App.defaultProps = {
  header: "Props from the header...",
  content: "Props from the content"
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
  render(){
    return(
      <div>
        <div className="App-intro">
        </div>
        <div>
        <h4>Array: {this.props.propArray}</h4>
        <h3>Boolean: {this.props.propBool ? "true" : "false"}</h3>
        <h2>Function: {this.props.propFunc(5)}</h2>
        <h1>String: {this.props.propString}</h1>
        <h1>Object: {this.props.propObject.name1}</h1>
        <h1>Object: {this.props.propObject.age}</h1>

        </div>
      </div>

    );
  }
}
// Adding properties to Components (in this case "Content")
Content.propTypes = {
  // The way yo access properties, we use "React" object
  // Tells component this is an array.  "isRequired" makes it madatory
  propArray: PropTypes.array.isRequired,
  // Creates a boolean
  propBool: PropTypes.bool.isRequired,
  // Creates a function
  propFunction: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: 'true',
  propFunc: function(e) {return e},
  propNumber: 2,
  propString: 'Hi man',
  propObject: {
    name1: "Matt",
    age: "3"
  }
}


export default App;
