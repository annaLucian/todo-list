import { useState } from "react";

export const TodoItem = ({ todo, onHandleDeleteTodo, onHandleEditTodo }) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const [inputEditValue, setInputEditValue] = useState(todo.text);

  const handleEdit = (id, value, e) => {
    e.preventDefault();
    onHandleEditTodo(id, value);
    setShowEditInput(false);
  };

  return showEditInput ? (
    <form onSubmit={(e) => handleEdit(todo.id, inputEditValue, e)}>
      <input
        value={inputEditValue}
        onChange={(e) => setInputEditValue(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  ) : (
    <li className="todo-list__item">
      {todo.text} <button onClick={() => onHandleDeleteTodo(todo.id)}>X</button>
      <button onClick={() => setShowEditInput(true)}>Edit</button>
    </li>
  );
};
