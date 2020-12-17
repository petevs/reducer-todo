import React, {useState, useEffect} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';

function App() {

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm />
    </div>
  );
}

export default App;
