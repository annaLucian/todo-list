import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoContext } from "../Context/TodoContext";
import { TodoList } from "./index";

describe("Render <TodoList/>", () => {
  render(
    <TodoContext.Provider value={{ todos: [] }}>
      <TodoList />
    </TodoContext.Provider>,
  );

  it("should be a text stating that there are no tasks.", () => {
    expect(
      screen.getByText("There are no tasks yet! Add a new task =)"),
    ).toBeInTheDocument();
  });
});
