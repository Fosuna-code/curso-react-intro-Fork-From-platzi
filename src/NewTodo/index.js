import React from "react";
import "./NewTodo.css"
import { TodoContext } from "../TodoContext";
class NewTodo extends React.Component{
    render(){
        return(
            <TodoContext.Consumer>
                {(context) =>
                (<div className={`fullScreenNT ${!context.isnewTodoOpened && "none"} `}>
                 <form className="newTodo" onSubmit={
                    (e)=>{
                        e.preventDefault();
    
                        const newTodoText = e.target.querySelector("#newTodoText");
    
                        if (newTodoText.value.trim() === ""){
                            newTodoText.value = ""
                            context.setValidText(false);
                            return;
                        }
                        context.todos.push({text: newTodoText.value, completed: false, key:(context.todos[context.todos.length - 1]?.key + 1) || 0});
                        newTodoText.value= "";
                        context.saveTodos(context.todos);
                        context.setValidText(true);
                        context.setIsNewTodoOpened(false);
                    }
                 }>
                    <label htmlFor="newTodoText">Escribe aqui el nuevo ToDo:</label>
                    <textarea id="newTodoText" className={`${!context.validText && "alertPlaceholder"}`}placeholder={`${!context.validText ? "Blank space is not allowed": ""}`}></textarea> 
                    <div className="bthContainer">
                        <button className="newTodoCreateBtn" type="submit" >Crear todo</button>
                        <button className="newTodoCancelBtn" type="reset" onClick={
                            (e)=>{
                                context.setIsNewTodoOpened(false);
                                context.setValidText(true)
                            }
                        }>Cancelar</button>
                    </div>
                </form>
                
            </div>)}
            </TodoContext.Consumer>
        );
    }
    
}
export {NewTodo};
