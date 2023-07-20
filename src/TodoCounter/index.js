import useWindowSize from 'react-use/lib/useWindowSize'

import Confetti from 'react-confetti'

// import coffetti from './utils/confetti2.js'
import React from 'react';
import "./TodoCounter.css";
export function TodoCounter({completed, total,loading,isnewTodoOpened}){
    // const coffetti = new coffetti();
    const { width, height } = useWindowSize();

    return(
        <h1 className="TodoCounter">
            {completed !== total
            ?<div> Has completado <span>{completed}</span> de <span>{total}</span> ToDos
                
             </div>
            : total === 0 && !loading
            ? <div>No tienes ningun Todo, agrega uno para verlo aqui</div> 
                
            : loading
            ? <div>Cargando
                <div className='ballContainer'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                </div>
                </div> 
        
            :<div> Genial! has completado todos los Todos!🎉  
                {!isnewTodoOpened && <Confetti width={width} height={height}/>}
            </div>
        }
        </h1>
    );
}