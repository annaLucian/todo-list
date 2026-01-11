import { useState } from "react";

export const TodoItem = ({
  todo,
  onHandleDeleteTodo,
  onHandleEditTodo,
  onHandleCompletedTodo,
}) => {
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
        <p
          className={`todo-list__itemText ${
            todo.completed && "todo-list__itemText--completed"
          }`}
        >
          {todo.text}
        </p>
        <button onClick={() => onHandleDeleteTodo(todo.id)}>X</button>
        <button onClick={() => setShowEditInput(true)}>Edit</button>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onHandleCompletedTodo(todo.id)}
        />
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
