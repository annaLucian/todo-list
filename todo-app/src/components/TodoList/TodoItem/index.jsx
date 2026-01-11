export const TodoItem = ({ todo }) => {
  return (
    <li className="todo-list__item">
      {todo} <button>X</button>
    </li>
  );
};
