import React from "react";
import { useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({children}){
  const {item:todos,
        saveItem:saveTodos,
        error,
        loading,
        setLoading} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [isnewTodoOpened,setIsNewTodoOpened] = React.useState(false);
  const [validText,setValidText] = React.useState(true);
  const todoMatch = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase()) && todo);

  const completedTodos = todos.filter(
    todos => !!todos.completed
  ).length;
  const totalTodos = todos.length;

  
  const completeTodo = (key) =>{
    const newTodos = [...todos];
    // console.log(key)
    const todoIndex = newTodos.findIndex(
      (todo) => todo.key === key
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (key) =>{
    const newTodos = [...todos];
    // console.log(key)
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === key
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
        error,
        loading,
        setLoading,
        isnewTodoOpened,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        todoMatch,
        setIsNewTodoOpened,
        setValidText,
        saveTodos,
        validText,
        todos,
        completeTodo,
        deleteTodo
  
    }}>
        {children}
    </TodoContext.Provider>
  );

}


export {TodoContext,TodoProvider};

// const defaultTodos = [
//   {text: 'Mi libro', completed: true , key:0},
//   {text: 'XDDDD', completed: false , key:1},
//   {text: 'Llorar', completed: false , key:2}
// ]