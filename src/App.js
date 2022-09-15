import './App.css';
import TodoList from './features/todo/TodoList';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
