import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../Context/TodoContext";
import "./index.css";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0)
    return (
      <p style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#f09595" }}>
        There are no tasks yet! Add a new task =)
      </p>
    );
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todoItem-${todo.id}`} />
      ))}{" "}
    </ul>
  );
};
