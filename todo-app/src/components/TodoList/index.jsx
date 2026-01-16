import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../Context/TodoContext";
import "./index.css";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todoItem-${todo.id}`} />
      ))}{" "}
    </ul>
  );
};
