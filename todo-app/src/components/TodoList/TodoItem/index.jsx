import { useState } from "react";

export const TodoItem = ({ todo, onHandleDeleteTodo, onHandleEditTodo }) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const [inputEditValue, setInputEditValue] = useState(todo.text);

  const handleEdit = ({ todo, e }) => {
    e.preventDefault();
    onHandleEditTodo(todo.id, inputEditValue);
    setShowEditInput(false);
  };

  if (!showEditInput)
    return (
      <li className="todo-list__item">
        {todo.text}{" "}
        <button onClick={() => onHandleDeleteTodo(todo.id)}>X</button>
        <button onClick={() => setShowEditInput(true)}>Edit</button>
      </li>
    );

  return (
    <form onSubmit={(e) => handleEdit({ todo, e })}>
      <input
        value={inputEditValue}
        onChange={(e) => setInputEditValue(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
};
