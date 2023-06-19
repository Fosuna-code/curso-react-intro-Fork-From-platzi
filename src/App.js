import './App.css';
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Mi libro', completed: true , key:0},
  {text: 'XDDDD', completed: false , key:1},
  {text: 'Llorar', completed: false , key:2}
]

function App() {
  return (
    <div className='App'>
      <TodoCounter completed={5} total={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed}></TodoItem>
        ))}
        
        
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}

// function ButtonCounter(){
//   const [count, setCount] = useState(0);
//   function changeCount(){
//     setCount(count+1);
//   }
//   return(
//     <button onClick={changeCount}>
//       Clicked {count} times
//     </button>
//   );
// }

export default App;
