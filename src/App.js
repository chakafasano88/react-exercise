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
        <h2>Array: {this.props.propArray}</h2>
        </div>
      </div>

    );
  }
}
// Adding properties to Components (in this case "Content")
Content.propTypes = {
  // The way yo access properties, we use "React" object
  // Tells component this is an array.  "isRequired" makes it madatory
  propArray: React.PropTypes.array.isRequired,
  // Creates a boolean
  propBool: React.PropTypes.bool.isRequired,
  // Creates a function
  propFunction: React.proptypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: 'true',
  propFunc: function(e) {return},
  propNumber: 2,
  propString: 'Hi man',
  propObject: {
    name1: "Matt",
    age: "3"
  }
}


export default App;
