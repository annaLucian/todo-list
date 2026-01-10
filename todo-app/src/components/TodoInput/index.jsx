import "./index.css";
import { TodoInputButton } from "./TodoInputButton";
export const TodoInput = () => {
  return (
    <div className="todo-input__container">
      <input className="todo-input__field" placeholder="Add the task" />
      <TodoInputButton />
    </div>
  );
};
