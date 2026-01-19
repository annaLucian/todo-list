import { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";

export const TodoItem = ({ todo }) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const [inputEditValue, setInputEditValue] = useState(todo.text);

  const { handleEditTodo, handleDeleteTodo, handleCompletedTodo } =
    useContext(TodoContext);

  const handleEdit = ({ todo, e }) => {
    e.preventDefault();
    if (inputEditValue.trim() === "") return;
    handleEditTodo(todo.id, inputEditValue);
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
        <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
        <button onClick={() => setShowEditInput(true)}>Edit</button>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCompletedTodo(todo.id)}
        />
      </li>
    );

  return (
    <form
      style={{ display: "flex", alignContent: "center" }}
      onSubmit={(e) => handleEdit({ todo, e })}
    >
      <input
        value={inputEditValue}
        onChange={(e) => setInputEditValue(e.target.value)}
        data-testid="input-edit"
        style={{ height: "2rem" }}
      />
      {inputEditValue.trim() === "" ? (
        <p style={{ color: "#f09595", fontSize: "1.2rem" }}>
          try writting a task!!
        </p>
      ) : (
        <button>AddTask</button>
      )}
    </form>
  );
};
