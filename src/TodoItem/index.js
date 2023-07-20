import React from 'react';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import "./TodoItem.css"

function TodoItem(props){
  function getHighlightedText(text, highlight){
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
  }
    return(
      <li className={`TodoItem ${props.completed && "active"}`} 
      onClick={props.onCompleted}>
        <span className="">
          <AiOutlineCheck className='check'></AiOutlineCheck>
        </span>
        <p>{getHighlightedText(props.text, props.searchValue)}</p>
        <span ><AiOutlineDelete className="delete" onClick={
          (e) => {
            e.stopPropagation();

            props.onDelete()          
          }
        }></AiOutlineDelete></span>
      </li>
    ); 
  }

export {TodoItem};