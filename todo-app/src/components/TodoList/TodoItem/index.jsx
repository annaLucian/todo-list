export const TodoItem = ({ todo, onHandleDeleteTodo }) => {
  return (
    <li className="todo-list__item">
      {todo.text} <button onClick={() => onHandleDeleteTodo(todo.id)}>X</button>
    </li>
  );
};
