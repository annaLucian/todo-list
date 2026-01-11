import { TodoItem } from "./TodoItem";
import "./index.css";

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todoItem-${todo.id}`} />
      ))}
    </ul>
  );
};
