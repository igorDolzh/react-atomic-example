import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import TodoListAtomic from './TodoListAtomic'
import Intro from './Intro'

class Main extends Component {
    render() {
      return (
        <main>
                <Switch>
                    <Route exact path='/' component={Intro}/>
                    <Route path='/todoList' component={TodoListAtomic}/>
                </Switch>
            </main>
            )
    }
  }

export default Main
