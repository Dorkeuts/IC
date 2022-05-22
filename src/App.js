import './App.css';

import TodoList from "./pages/TodoList"
import AjoutTache from './pages/ajoutTache';
import ModifTache from './pages/modifTache';
import { Component } from 'react';
import { render } from '@testing-library/react';
import React from 'react';

class App extends Component
{
  render() 
  {
    return(<TodoList /> );
  }   
}

export default App;