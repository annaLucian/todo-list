import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoInput } from "./index";
import { TodoContext } from "../context/TodoContext.jsx";
import userEvent from "@testing-library/user-event";

describe("render <TodoInput/>", () => {
  it("should add a task.", async () => {
    const user = userEvent.setup();
    const mockHandleAddTodo = vi.fn();

    render(
      <TodoContext.Provider value={{ handleAddTodo: mockHandleAddTodo }}>
        <TodoInput />
      </TodoContext.Provider>,
    );
    const input = screen.getByPlaceholderText(/Add the task/i);

    await user.type(input, "Aprender Testing{enter}");

    expect(mockHandleAddTodo).toHaveBeenCalledWith("Aprender Testing");
    expect(input).toHaveValue("");
  });
});
