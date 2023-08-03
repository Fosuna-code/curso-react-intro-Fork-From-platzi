import React from "react";
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


class AppUi extends React.Component{
    render(){
      
        return(
          <TodoContext.Consumer>
            {(context) => (
                <div className='App'>
                <TodoCounter/>
                <TodoSearch />
                <TodoList>
                  {context.loading && <><TodoLoading/> <TodoLoading/> <TodoLoading/></>}
                  {context.error && !context.loading && <TodoError/>}
                  {!context.loading && context.todos.length == 0 && <TodoEmpty></TodoEmpty>}
                  {context.todoMatch.length === 0 && context.todos.length !==0 && <TodoNotFound/>}
                  {context.todoMatch.map(todo => (
                    <TodoItem  key={todo.key}  text={todo.text} completed={todo.completed} searchValue={context.searchValue} todos={context.todos} setTodos={context.saveTodos} onCompleted={() => context.completeTodo(todo.key)} onDelete={()=>context.deleteTodo(todo.text)}></TodoItem>
                  ))}
                </TodoList>      
                <CreateTodoButton />
                <Modal>
                  <NewTodo></NewTodo>
                </Modal>
            </div>
              )}
          </TodoContext.Consumer>
        )
        
    }
}

export  {AppUi}   