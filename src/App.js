import './App.css';
import TodoList from './features/todo/TodoList';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
