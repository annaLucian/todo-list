import "./index.css";
import { useState } from "react";
import { TodoInputButton } from "./TodoInputButton";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
