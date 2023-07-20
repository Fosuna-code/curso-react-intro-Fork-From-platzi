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

function AppUi(){
    return(
    <div className='App'>
      {/* {!isnewTodoOpened && conffetti && <Confetti width={width} height={height}/>} */}
      <TodoCounter />
      <TodoSearch  />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          todoMatch,
          completeTodo,
          deleteTodo,
          setLoading,
          searchValue,
          todos,
          saveTodos
          
        }) =>{
          <TodoList>
          {loading && <><TodoLoading/> <TodoLoading/> <TodoLoading/></>}
          {error && !loading && <TodoError setLoading={setLoading}/>}
          {(!loading && todoMatch.length === 0) && <TodoEmpty></TodoEmpty>}
          {todoMatch.map(todo => (
            <TodoItem key={todo.key} text={todo.text} completed={todo.completed} searchValue={searchValue} todos={todos} setTodos={saveTodos} onCompleted={() => completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}></TodoItem>
          ))}

          
        </TodoList>
        }}
      </TodoContext.Consumer>
      
      <CreateTodoButton />
      <NewTodo ></NewTodo>
      
    </div>
    );
}

export {AppUi}