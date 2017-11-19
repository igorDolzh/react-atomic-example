import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Intro extends Component {
  render() {
    let { todoList } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TodoList React-Atomic example</h1>
        </header>
      </div>
    );
  }
}

export default Intro