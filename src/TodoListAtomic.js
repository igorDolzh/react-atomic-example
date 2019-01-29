import React, { Component } from 'react';
import { subscribe } from 'react-atomic'
import todoList from './store/todoList'
import logo from './logo.svg';
import TodoList from './TodoList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    const { todoList = [], actions } = this.props
    console.log('todoList',this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TodoList React-Atomic example</h1>
        </header>
        <TodoList className="Wrap" todoList={todoList} actions={actions}/>
      </div>
    );
  }
}

export default subscribe({
  subs: () => ({
    todoList: todoList
  }),
  actions: () => ({
    count: todoList.count,
    appendTodolist: todoList.appendTodolist,
    deleteTodolist: todoList.deleteTodolist
  })
}, App);
