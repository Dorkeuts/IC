import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TodoList from "./pages/todolist"
import AjoutTache from './pages/ajoutTache';
import ModifTache from './pages/modifTache';

const Taches = ["tache1", "tache2", "tache3"];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ajout" element={<AjoutTache />} />
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<ModifTache />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;