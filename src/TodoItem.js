import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import "./TodoItem.css"

function TodoItem(props){
    return(
      <li className='TodoItem'>
        <span className="">
          <AiOutlineCheck className='check'></AiOutlineCheck>
        </span>
        <p>{props.text}</p>
        <span><AiOutlineDelete></AiOutlineDelete></span>
      </li>
    );
  }

export {TodoItem};