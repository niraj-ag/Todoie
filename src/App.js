import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/Todolist';

import "./components/style.css";

const App = () => {
  return (
    <div className="todo-container">
    <Header/>
    <TodoList/>
    
    </div>
  )
}

export default App