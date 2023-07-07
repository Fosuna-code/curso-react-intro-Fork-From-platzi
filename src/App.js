import React from 'react';

import useWindowSize from 'react-use/lib/useWindowSize'

import Confetti from 'react-confetti'
import './App.css';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {TodoCounter} from './TodoCounter'
import { CreateTodoButton } from './CreateTodoButton';
import {NewTodo} from './NewTodo'

const defaultTodos = [
  {text: 'Mi libro', completed: true , key:0},
  {text: 'XDDDD', completed: false , key:1},
  {text: 'Llorar', completed: false , key:2}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [isnewTodoOpened,setIsNewTodoOpened] = React.useState(false);
  const [validText,setValidText] = React.useState(true);
  const [conffetti,setConffetti] = React.useState(false);
  const todoMatch = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase()) && todo);

  const completedTodos = todos.filter(
    todos => !!todos.completed
  ).length;
  const totalTodos = todos.length;
  const { width, height } = useWindowSize();

  return (
    <div className='App'>
      {!isnewTodoOpened && conffetti && <Confetti width={width} height={height}/>}
      <TodoCounter completed={completedTodos} total={totalTodos} setConffetti={setConffetti}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todoMatch.map(todo => (
          <TodoItem id={todo.key} key={todo.key} text={todo.text} completed={todo.completed} searchValue={searchValue} todos={todos} setTodos={setTodos}></TodoItem>
        ))}
        
        
      </TodoList>
      <CreateTodoButton setIsNewTodoOpened={setIsNewTodoOpened} isnewTodoOpened={isnewTodoOpened}validText={validText}setValidText={setValidText} setConffetti={setConffetti}/>
      <NewTodo opened={isnewTodoOpened} setIsNewTodoOpened={setIsNewTodoOpened} setTodos={setTodos} todos={todos}validText={validText}setValidText={setValidText}></NewTodo>
      
    </div>
  );
}

// function ButtonCounter(){
//   const [count, setCount] = useState(0);
//   function changeCount(){
//     setCount(count+1);
//   }
//   return(
//     <button onClick={changeCount}>
//       Clicked {count} times
//     </button>
//   );
// }

export default App;
