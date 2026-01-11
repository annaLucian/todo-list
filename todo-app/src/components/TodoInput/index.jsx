import "./index.css";
import { useState } from "react";
import { TodoInputButton } from "./TodoInputButton";

export const TodoInput = ({ onHandleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviaar o setear el vlor actual a la lista
    // no agregar lista vacias
    const inputValueWithoutSpaces = inputValue.trim();
    if (inputValueWithoutSpaces === "") return;
    onHandleAddTodo(inputValueWithoutSpaces);
    // limpia el input despues de guadar la task
    setInputValue("");
  };

  return (
    <form className="todo-input__container" onSubmit={handleSubmit}>
      <input
        className="todo-input__field"
        placeholder="Add the task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <TodoInputButton />
    </form>
  );
};
