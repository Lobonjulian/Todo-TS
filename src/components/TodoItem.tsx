import { Todo } from '../App';

interface Props {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  eliminarTodo: (index: number) => void;
}

const TodoItem = ({ index, todo, toggleTodo, eliminarTodo }: Props) => {
  return (
    <article>
    <fieldset>
      <label htmlFor={`todo-${index}`}>
        <input
          type="checkbox"
          id={`todo-${index}`}
          checked={todo.completado}
          onChange={() => toggleTodo(index)}
        />
        {todo.texto}
      </label>
    </fieldset>
    <button
      className="btn-destroy"
      onClick={() => eliminarTodo(index)}
    >
      Eliminar
    </button>
  </article>
  )
}

export default TodoItem;