import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TodoList from "./pages/todolist"
import AjoutTache from './pages/ajoutTache';
import ModifTache from './pages/modifTache';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/ajout" element={<AjoutTache />} />
        <Route path="/:id" element={<ModifTache />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;