import "./index.css";
import { TodoInputButton } from "./TodoInputButton";
export const TodoInput = () => {
  return (
    <div>
      <input className="todo-input__field" />
      <TodoInputButton />
    </div>
  );
};
