import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <section>
        <TodoInput />
      </section>
      <section className="todo-list__section">
        <TodoList />
      </section>
    </>
  );
}

export default App;
