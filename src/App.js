import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      errorStyle: {
        'float': 'left',
        'margin': '10px 0'
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(event, key) {
    this.setState({[key]: event.target.value})
  }

  handleClick(e) {
    if(!this.state.username || !this.state.password) {
      this.setState({
        errorMessage: 'username or password empty :(',
        errorStyle: {
          ...this.state.errorStyle,
          'color': 'red'
        }
      })
      return;
    } 

    if (this.state.username === 'tanmay' && this.state.password === 'rajani') {
      this.setState({
        errorMessage: 'logged in successfully',
        errorStyle: {
          ...this.state.errorStyle,
          'color': 'green'
        }
      })
    } else {
      this.setState({
        errorMessage: 'username or password wrong! :(',
        errorStyle: {
          ...this.state.errorStyle,
          'color': 'red'
        }
      })
    }
  }

  render() {
    let inputStyle = {
      'display': 'block',
      'marginTop': '10px',
      'padding': '5px 8px',
      'fontSize': '18px',
      'fontFamily': 'Courier New, Courier, monospace'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form className="App-intro">
          <input type="text" name="username" placeholder="Username" onChange={(e) => this.onChangeInput(e, 'username')} style={inputStyle}/>
          <input type="password" name="password" placeholder="Password" onChange={(e) => this.onChangeInput(e, 'password')} style={inputStyle}/>
          <button type="button" name="submit" onClick={(e) => this.handleClick(e)} style={inputStyle}>Sign in</button>
          <div style={this.state.errorStyle}>{this.state.errorMessage}</div>
        </form> 
      </div>
    );
  }
}

export default App;
