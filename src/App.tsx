import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
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
        <h1>Todo componentes con TS</h1>
        <FormAddTodo addTodo={addTodo} />
        <div className="todo-list">
          <Todos 
          todos={todos}
          toggleTodo={toggleTodo}
          eliminarTodo={eliminarTodo}
          />
        </div>
      </div>
    </>
  );
};

export default App;
