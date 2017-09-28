import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// USING STATE AND PROPS IN A COMPONENT TO PASS IN DATA
// THIS COMPONENT INPUTS ALL OTHER COMPONENTS WITH XML JSX
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
        <Header />
        <Content />
        {// "Date" is now a prop of "Clock Component"
        }
        <Clock />
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

class Clock extends Component {
  constructor(props){
    super(props);

    // Use this "state to display your data"
    // The construcotr is the only place where you set "this.state"
    // It is otherwise used as "this.setState"
    this.state = {
      date: new Date()
    };
  }

  // LIFECYCLE METHODS:
  // Each component has several "lifecycle methods" that you can override to run
  // code at particular times in the process. Methods prefixed with will are
  // called right before something happens, and methods prefixed with did are
  // called right after something happens.

  componentDidMount(){
    this.timeID = setInterval(
      () => {this.tick()}
  , 1000 )
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  // componentWillUnmount(){
  //   clearInterval(timeID)
  // }

  render(){
    return(
      <div>
        <h2>The Current Time Is: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);
    // This is a state with data
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Hey",
          "age": 30
        },
        {
          "id": 2,
          "name": "He",
          "age": 20
        },
        {
          "id": 3,
          "name": "fey",
          "age": 10
        }
      ]
    };
  }
  render(){
    return(
      <p className="App-intro">
      <h1> What is JSX? </h1>
        To get started, edit <code>src/App.js</code> and save to reload.
        <table>
          <thead>
            <th>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </th>
          </thead>
          <tbody>
          {// For any component displayed, you must have a key
          // data is like an HTML attribute, and can be called with "props"
          }
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
          </tbody>
        </table>
      </p>
    );
  }
}


class TableRow extends Component {
  render(){
    return(
      <tr>
        <td>
          {this.props.data.id}
          {this.props.data.name}
          {this.props.data.age}
        </td>
      </tr>
    );
  }
}

export default App;
