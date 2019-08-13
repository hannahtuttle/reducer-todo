import React, {useReducer} from 'react';
import './App.css';

import ToDoForm from './components/todoForm.js'
import TodoList from './components/todoList.js'
import {initialState, reducer} from './reducers/reducers.js'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

 

  return (
    <div className="App">
    <TodoList state={state} dispatch={dispatch}/>
    <ToDoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
