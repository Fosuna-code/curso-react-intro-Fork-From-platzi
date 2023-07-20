import { AiFillAlert } from "react-icons/ai";

import React from "react";
import "./TodoError.css"
function TodoError({setLoading}){
    return(
        <section className="ErrorContainer">
            <AiFillAlert className='ErrorIcon' fill="red"></AiFillAlert>
            <p>Algo salio mal!!!</p>
            <button onClick={setLoading}>Reintentar</button>
        </section>
        
    );
}

export {TodoError};