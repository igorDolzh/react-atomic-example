import React, { Component } from 'react';
import { atom, watch, deref, reset, swap } from 'atom-observable'
import { subscribe } from 'react-atomic'
import { todoListA } from './store/state'
import logo from './logo.svg';
import TodoList from './TodoList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    let { todoList } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TodoList React-Atomic example</h1>
        </header>
        <TodoList className="Wrap" todoList={todoList} />
      </div>
    );
  }
}

export default SubsAtoms({
  subs: () => ({
    todoList: todoListA
  })
}, App);
