import React from "react";
import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext";
function CreateTodoButton(){
    const {
        setIsNewTodoOpened,
        isnewTodoOpened,
        setValidText
    } = React.useContext(TodoContext);
    return(
        <button className="CreateTodoButton"
        onClick={() => {
            setIsNewTodoOpened(!isnewTodoOpened);
            setValidText(true);
            // setConffetti(false);
        }}
        >+</button>
    );
}

export {CreateTodoButton};