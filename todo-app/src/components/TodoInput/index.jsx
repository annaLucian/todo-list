import "./index.css";
import { useState } from "react";
import { TodoInputButton } from "./TodoInputButton";

export const TodoInput = ({ onHandleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const cleanInputWhiteSpaces = (inputValue) => {
    return inputValue.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputWitNoSpaces = cleanInputWhiteSpaces(inputValue);
    if (inputWitNoSpaces === "") return;
    onHandleAddTodo(inputWitNoSpaces);

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
