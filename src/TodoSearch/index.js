import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
class TodoSearch extends React.Component{
    render(){
        return(
            <TodoContext.Consumer>
                {(context) =>(
                    <input className="TodoSearch" placeholder="Buscar ToDo"
                    value={context.searchValue} onChange={(event) => {
                       context.setSearchValue(event.target.value);
                    }}></input>)}
            </TodoContext.Consumer>
            
        );
    }
    
}

export {TodoSearch};