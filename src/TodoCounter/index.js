import Confetti from 'react-confetti'
import React from 'react';
import "./TodoCounter.css";
import { TodoContext } from '../TodoContext';

export class TodoCounter extends React.Component{
    render(){
        return (
            <TodoContext.Consumer>
                {(context) =>
                    (<h1 className="TodoCounter">
                    {context.completedTodos !== context.totalTodos
                    ?<div> Has completado <span>{context.completedTodos}</span> de <span>{context.totalTodos}</span> ToDos

                     </div>
                    : context.totalTodos === 0 && !context.loading
                    ? <div>No tienes ningun Todo, agrega uno para verlo aqui</div> 

                    : context.loading
                    ? <div>Cargando
                        <div className='ballContainer'>
                            <div className='ball'></div>
                            <div className='ball'></div>
                            <div className='ball'></div>
                        </div>
                        </div> 

                    :<div> Genial! has completado todos los Todos!🎉  
                        {!context.isnewTodoOpened && <Confetti/>}
                    </div>
                    }
                    </h1>)}
            </TodoContext.Consumer>
            
        )
    }
    
}