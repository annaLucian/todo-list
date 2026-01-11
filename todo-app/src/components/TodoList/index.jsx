import { TodoItem } from "./TodoItem";
import "./index.css";

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos?.map((todo, index) => (
        <TodoItem todo={todo} key={`todoItem-${index}`} />
      ))}
    </ul>
  );
};
