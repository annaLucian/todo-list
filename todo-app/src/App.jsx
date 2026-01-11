import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo List</h1>
      <section className="">
        <TodoInput setTodos={setTodos} />
      </section>
      <section className="todo-list__section">
        <TodoList todos={todos} />
      </section>
    </>
  );
}

export default App;
