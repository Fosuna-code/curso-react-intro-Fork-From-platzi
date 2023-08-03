import React from 'react';
import './App.css';
import UseLocalStorage from '../hooks/useLocalStorage';
import {TodoProvider} from '../TodoContext/'
import { AppUi } from './AppUi';

function App() {
  return (
    <UseLocalStorage itemName={'TODOS_V1'} initialValue={[]}>
      {({item,saveItem,error,loading}) => (
        <TodoProvider item={item} saveItem={saveItem} error={error} loading={loading}>
          <AppUi></AppUi>
        </TodoProvider>
      )
        
      }    
    </UseLocalStorage>
    
  );
}

export default App;
