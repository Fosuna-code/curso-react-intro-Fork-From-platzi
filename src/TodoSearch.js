import React from "react";
import "./TodoSearch.css";
function TodoSearch({
    searchValue,
    setSearchValue
}){
   
    return(
        <input className="TodoSearch" placeholder="Buscar ToDo"
        value={searchValue} onChange={(event) => {
           setSearchValue(event.target.value);
        }}></input>
    );
}

export {TodoSearch};