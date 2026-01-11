import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoName) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoName,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  };

  const handleEditTodo = (id, inputEditValue) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        const newTodoEdit = { ...todo, text: inputEditValue };
        return newTodoEdit;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <section className="">
        <TodoInput onHandleAddTodo={handleAddTodo} />
      </section>
      <section className="todo-list__section">
        <TodoList
          todos={todos}
          onHandleDeleteTodo={handleDeleteTodo}
          onHandleEditTodo={handleEditTodo}
        />
      </section>
    </>
  );
}

export default App;
