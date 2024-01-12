import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addTodo: (texto: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    addTodo(trimmedTodo);

    setTodo("");
  };

  return (
    <form className="form-add-todo" onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        type="text"
        id="todo"
        placeholder="Ingrese Algo"
        value={todo}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormAddTodo;
