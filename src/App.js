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
  constructor(props){
    super(props);

    this.state = {
      myInputValue: "My-Input"
    };
    this.myInputChanged = this.myInputChanged.bind(this);
  }

  myInputChanged(e) {
    let itemValue = e.target.value;
    this.setState({myInputValue: itemValue})

  }
  render(){
    return(
      <div>
        <h1> Forms In React! </h1>
        <p>We will learn forms</p>
        <MyInputComponent inputValue={this.state.myInputValue} myInputChanged={this.myInputChanged}/>
        <EssayComponent />
        <FlavorForm />
        <Reservations />
        <h4>{this.state.myInputValue}</h4>

      </div>
    );
  }
}
class MyInputComponent extends React.Component {
  render(){
    return(
      <div>
        <input value={this.props.inputValue} onChange={this.props.myInputChanged}></input>
      </div>
    );
  }
};

class EssayComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'one upon a time...'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    alert(this.state.value)
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <h4>{this.state.value}</h4>
        <button type='submit'></button>
      </form>
    );
  }
};

class FlavorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'grapefruit'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    alert(this.state.value)
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <label>Pick Your Fav
          <select onChange={this.handleChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="chocolate">chocolate</option>
            <option value="strawberry">strawberry</option>
            <option value="blackrasberry">blackrasberry</option>
          </select>
        </label>
        <button type="submit"></button>
      </form>
    );
  }
};

class Reservations extends Component {
  constructor(props){
    super(props)

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(name, value);
  }

  handleSubmit(e){
    alert('I will be going'+ this.state.isGoing +"I Will Bring"+ this.state.numberOfGuests )
    e.preventDefault()

  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Are You Going To The Party?
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            >
          </input>
          <button type="submit">Click</button>
        </label>
        <br/>
        <label>
          Are You Going To The Party?
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}>
          </input>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default App;
