import React from 'react';
import { render } from 'react-dom';
import { atom, watch, deref, reset, swap } from 'atom-observable'
import { todoListC } from './store/state'

console.clear();

const Title = ({todoCount}) => {
  return (
    <div>
       <div>
          <h1>to-do ({todoCount})</h1>
       </div>
    </div>
  );
}

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}

class TodoApp extends React.Component{
  constructor(props){
      super(props)
      this.id = props.todoList ? props.todoList.length : 0
  }

  addTodo(val){
    let { todoList } = this.props
    const todo = {id: ++this.id, text: val}
    todoListC.reset([...todoList, todo])
  }

  handleRemove(id){
    let { todoList } = this.props
    todoListC.reset(todoList.filter((todo) => {
        if(todo.id !== id) return todo;
      }))
  }

  render(){
    let { todoList } = this.props
    return (
      <div className={this.props.className}>
        <Title todoCount={todoList.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={todoList}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp