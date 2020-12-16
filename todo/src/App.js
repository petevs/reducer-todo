import React, {useState, useEffect} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {

  const todoList = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    setTodos(todoList)
  },[])

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
