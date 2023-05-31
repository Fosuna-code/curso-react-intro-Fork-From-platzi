import "./TodoCounter.css";
export function TodoCounter({completed, total}){
    return(
        <h1>
            Has completado {completed} de {total} ToDos
        </h1>
    );
}