import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
function App() {
  return (
    <>
      <h1>Todo List</h1>
      <section className="">
        <TodoInput />
      </section>
      <section className="todo-list__section">
        <TodoList />
      </section>
    </>
  );
}

export default App;
