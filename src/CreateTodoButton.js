import React from "react";
import "./CreateTodoButton.css"
function CreateTodoButton({
    setIsNewTodoOpened,
    isnewTodoOpened,
    setConffetti,
    setValidText
}){
    return(
        <button className="CreateTodoButton"
        onClick={() => {
            setIsNewTodoOpened(!isnewTodoOpened);
            setValidText(true);
            setConffetti(false);
        }}
        >+</button>
    );
}

export {CreateTodoButton};