import { useState } from "react";
import FormAddTodo from "./FormAddTodo";

interface Todo {
  texto: string;
  completado: boolean;
}

const iniciarTodo: Todo[] = [
  {
    texto: "Aprender React",
    completado: true,
  },
  {
    texto: "Aprender TS",
    completado: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(iniciarTodo);

  const addTodo = (texto: string) => {
    const nuevoTodo = { texto, completado: false };
    setTodos([...todos, nuevoTodo]);
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completado: !todo.completado } : todo
      )
    );
  };

  const eliminarTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <h1>Todo con TS</h1>
        <FormAddTodo addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <article key={index}>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
