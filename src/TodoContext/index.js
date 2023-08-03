import React from "react";

const TodoContext = React.createContext();

class TodoProvider extends React.Component{
    state = {
        todos:this.props.item,
        saveTodos:this.props.saveItem,
        error:this.props.error,
        loading:this.props.loading,
        searchValue:'',
        isnewTodoOpened:false,
        validText: true,
    }
    setValidText = (validText) =>{ 
        this.setState({validText:validText})
    }
    setIsNewTodoOpened = (opened)=>{
        this.setState({isnewTodoOpened:opened})
    }
    setSearchValue = (searchValue)=>{
        this.setState({searchValue:searchValue})
    }

    componentDidUpdate(prevProps){
      if (prevProps.item !== this.props.item) {
        this.setState({ todos: this.props.item });
      }
  
      if (prevProps.saveItem !== this.props.saveItem) {
        this.setState({ saveTodos: this.props.saveItem });
      }
  
      if (prevProps.error !== this.props.error) {
        this.setState({ error: this.props.error });
      }
  
      if (prevProps.loading !== this.props.loading) {
        this.setState({ loading: this.props.loading });
      }
    }

    todoMatch = () => {
      return this.state.todos.filter(todo => 
        todo.text.toLowerCase().includes(this.state.searchValue.toLowerCase()) && todo)};
    

    completedTodos= () => (this.state.todos.filter(
        todos => !!todos.completed
      ).length);

    totalTodos =  ()=> this.state.todos.length;
    
    completeTodo = (key) =>{
        const newTodos = [...this.state.todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.key === key
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        this.state.saveTodos(newTodos);
      }

      deleteTodo = (key) =>{
        const newTodos = [...this.state.todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === key
        );
        newTodos.splice(todoIndex,1);
        this.state.saveTodos(newTodos);
      }

      render(){
        const {
            todos,
            saveTodos,
            error,
            loading,
            searchValue,
            isnewTodoOpened,
            validText
        } = this.state;
        const setValidText = this.setValidText
        const setIsNewTodoOpened = this.setIsNewTodoOpened
        const setSearchValue = this.setSearchValue
        const completedTodos = this.completedTodos()
        const totalTodos = this.totalTodos()
        const completeTodo = this.completeTodo
        const deleteTodo = this.deleteTodo
        const todoMatch = this.todoMatch()
       
        return(
            <TodoContext.Provider value={{
                error,
                loading,
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
              {this.props.children}
            </TodoContext.Provider>
        )
      }
}

export {TodoContext,TodoProvider}