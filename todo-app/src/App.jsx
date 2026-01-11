import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import "./App.css";

const KEY_TODO = "todoList";

const getTodosFromlocalStorage = () => {
  const tasks = localStorage.getItem(KEY_TODO);

  return tasks ? JSON.parse(tasks) : [];
};

const saveTodosLocalStorage = (newTodoList) => {
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodoList));
};

const removeTodoLocalStorage = (id) => {
  const todosFromLocalStorage = getTodosFromlocalStorage();
  const newTodos = todosFromLocalStorage.filter((todo) => todo.id !== id);
  saveTodosLocalStorage(newTodos);
};

function App() {
  const [todos, setTodos] = useState(() => getTodosFromlocalStorage());

  const handleAddTodo = (todoName) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoName,
      completed: false,
    };
    const newTodoList = [...todos, newTodo];

    setTodos(newTodoList);
    saveTodosLocalStorage(newTodoList);
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
    removeTodoLocalStorage(id);
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

  const handleCompletedTodo = (id) => {
    const newTodosList = todos.map((todo) => {
      if (todo.id === id) {
        const newTodoCompleted = { ...todo, completed: !todo.completed };
        return newTodoCompleted;
      }
      return todo;
    });
    setTodos(newTodosList);
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
          onHandleCompletedTodo={handleCompletedTodo}
        />
      </section>
    </>
  );
}

export default App;
