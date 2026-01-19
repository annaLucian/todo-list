import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoContext } from "../Context/TodoContext";
import { TodoList } from "./index";

describe("Render <TodoList/>", () => {
  const setup = (todos = []) => {
    render(
      <TodoContext.Provider value={{ todos }}>
        <TodoList />
      </TodoContext.Provider>,
    );
  };

  it("should be a text stating that there are no tasks.", () => {
    setup([]);
    expect(
      screen.getByText("There are no tasks yet! Add a new task =)"),
    ).toBeInTheDocument();
    screen.debug;
  });

  it("should render the correct number of todo items", () => {
    const mockTodos = [
      {
        id: crypto.randomUUID(),
        text: "First new task",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        text: "Second new task",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        text: "Three new task",
        completed: false,
      },
    ];

    setup(mockTodos);

    const ListItem = screen.getAllByRole("listitem");
    expect(ListItem).toHaveLength(3);
  });
});
