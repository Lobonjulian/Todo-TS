import  { Todo } from "../App"
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  eliminarTodo: (index: number) => void;
}

const Todos = ({ todos, eliminarTodo, toggleTodo }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem 
        key={index}
        todo={todo}
        index={index}
        toggleTodo={toggleTodo}
        eliminarTodo={eliminarTodo}
        />
      ))}
      {todos.length === 0 ? <p>No hay tareas pendientes</p> : null}
    </>
  )
}
export default Todos