import React from 'react';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {TodoCounter} from '../TodoCounter'
import { CreateTodoButton } from '../CreateTodoButton';
import {NewTodo} from '../NewTodo';
import {TodoLoading} from '../TodoLoading'
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoContext } from '../TodoContext';
import {TodoNotFound} from '../TodoNotFound';
import {Modal} from '../Modal'

function AppUi(){
  const {
    loading,
    error,
    todoMatch,
    completeTodo,
    deleteTodo,
    setLoading,
    searchValue,
    todos,
    saveTodos
  } = React.useContext(TodoContext);
    return(
    <div className='App'>
      {/* {!isnewTodoOpened && conffetti && <Confetti width={width} height={height}/>} */}
      <TodoCounter />
      <TodoSearch  />

      <TodoList>
        {loading && <><TodoLoading/> <TodoLoading/> <TodoLoading/></>}
        {error && !loading && <TodoError setLoading={setLoading}/>}
        {(!loading && todos.length === 0) && <TodoEmpty></TodoEmpty>}
        {todoMatch.length === 0 && todos.length !==0 && <TodoNotFound/>}
        {todoMatch.map(todo => (
          <TodoItem  key={todo.key}  text={todo.text} completed={todo.completed} searchValue={searchValue} todos={todos} setTodos={saveTodos} onCompleted={() => completeTodo(todo.key)} onDelete={()=>deleteTodo(todo.text)}></TodoItem>
        ))}
      </TodoList>      
      <CreateTodoButton />
      <Modal>
        <NewTodo></NewTodo>
      </Modal>
      
    </div>
    );
}

export {AppUi}