import { TodoContext } from "./TodoContext";
import { useState } from "react";
import {
  getTodosFromlocalStorage,
  saveTodosLocalStorage,
  removeTodoLocalStorage,
  updateTodoLocalStorage,
} from "../LocalStorage";

export const TodoProvider = ({ children }) => {
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
    updateTodoLocalStorage(id, inputEditValue);
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
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleCompletedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
