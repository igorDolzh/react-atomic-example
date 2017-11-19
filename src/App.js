import React, { Component } from 'react';
import { atom, watch, deref, reset, swap } from 'atom-observable'
import { SubsAtoms } from './store/atomic'
import { todoListC } from './store/state'
import Header from './Header'
import Main from './Main'
import logo from './logo.svg';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App
