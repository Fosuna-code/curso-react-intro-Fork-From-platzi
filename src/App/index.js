import React from 'react';
import './App.css';
import {TodoProvider} from '../TodoContext'
import { AppUi } from './AppUi';

function App() {
  return (
    <TodoProvider>
      <AppUi></AppUi>
    </TodoProvider>
    
  );
}

export default App;
