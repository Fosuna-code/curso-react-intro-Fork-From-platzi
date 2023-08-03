import React from "react";
import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext";
class CreateTodoButton extends React.Component{
    render(){
        
        return(
            <TodoContext.Consumer>
                {(context) =>
                    (<button className="CreateTodoButton"
                    onClick={() => {
                        context.setIsNewTodoOpened(!context.isnewTodoOpened);
                        context.setValidText(true);
                        // setConffetti(false);
                    }}
                    >+</button>)}
            </TodoContext.Consumer>

            
        );
    }
    
}

export {CreateTodoButton};