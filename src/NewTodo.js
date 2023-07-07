import React from "react";
import "./NewTodo.css"
function NewTodo({
    opened,
    setTodos,
    setIsNewTodoOpened,
    todos,
    validText,
    setValidText
}){
    return(
        <div className={`fullScreenNT ${!opened && "none"} `}>
             <form className="newTodo" onSubmit={
                (e)=>{
                    e.preventDefault();

                    const newTodoText = e.target.querySelector("#newTodoText");

                    if (newTodoText.value.trim() === ""){
                        newTodoText.value = ""
                        setValidText(false);
                        return;
                    }
                    todos.push({text: newTodoText.value, completed: false, key:todos[todos.length - 1].key + 1});
                    newTodoText.value= "";
                    setTodos(todos);
                    setValidText(true);
                    setIsNewTodoOpened(false);
                }
             }>
                <label htmlFor="newTodoText">Escribe aqui el nuevo ToDo:</label>
                <textarea id="newTodoText" className={`${!validText && "alertPlaceholder"}`}placeholder={`${!validText ? "Blank space is not allowed": ""}`}></textarea> 
                <div className="bthContainer">
                    <button className="newTodoCreateBtn" type="submit" >Crear todo</button>
                    <button className="newTodoCancelBtn" type="reset" onClick={
                        (e)=>{
                            setIsNewTodoOpened(false);
                            setValidText(true)
                        }
                    }>Cancelar</button>
                </div>
            </form>
            
        </div>
       
    );
}
export {NewTodo};
