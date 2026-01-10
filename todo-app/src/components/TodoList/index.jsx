import "./index.css";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <ul className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};
