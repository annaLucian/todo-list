export const TodoItem = ({ todo }) => {
  return (
    <li className="todo-list__item">
      {todo.text} <button>X</button>
    </li>
  );
};
