import './App.css';
import TodoList from './features/todo/TodoList';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFoundPage from './pages/NotFoundPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';
import BasicLayout from './layout/BasicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/" element={ <TodoList />} />
          <Route path="about" element={ <AboutPage />} />
          <Route path="help" element={ <HelpPage />} />
          <Route path="*" element={ <NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
