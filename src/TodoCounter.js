// import coffetti from './utils/confetti2.js'
import React from 'react';
import "./TodoCounter.css";
export function TodoCounter({completed, total,setConffetti}){
    // const coffetti = new coffetti();
    return(
        <h1 className="TodoCounter">
            {completed !== total 
            ?<div> Has completado <span>{completed}</span> de <span>{total}</span> ToDos
            {setConffetti(false)}
             </div>
            :<div> Genial! has completado todos los Todos!🎉  
            {setConffetti(true)}
            </div>
        }
        </h1>
    );
}