import "./index.css";
import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { TodoInputButton } from "./TodoInputButton";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { handleAddTodo } = useContext(TodoContext);

  const cleanInputWhiteSpaces = (inputValue) => {
    return inputValue.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputWitNoSpaces = cleanInputWhiteSpaces(inputValue);
    if (inputWitNoSpaces === "") return;
    handleAddTodo(inputWitNoSpaces);

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
