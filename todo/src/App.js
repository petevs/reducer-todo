import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
