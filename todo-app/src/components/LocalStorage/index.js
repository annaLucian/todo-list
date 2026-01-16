const KEY_TODO = "todoList";

export const getTodosFromlocalStorage = () => {
  const tasks = localStorage.getItem(KEY_TODO);

  return tasks ? JSON.parse(tasks) : [];
};

export const saveTodosLocalStorage = (newTodoList) => {
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodoList));
};

export const removeTodoLocalStorage = (id) => {
  const todosFromLocalStorage = getTodosFromlocalStorage();
  const newTodos = todosFromLocalStorage.filter((todo) => todo.id !== id);
  saveTodosLocalStorage(newTodos);
};

export const updateTodoLocalStorage = (id, inputEditValue) => {
  const todosFromLocalStorage = getTodosFromlocalStorage();
  const newTodos = todosFromLocalStorage.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text: inputEditValue };
    }
    return todo;
  });
  saveTodosLocalStorage(newTodos);
};
