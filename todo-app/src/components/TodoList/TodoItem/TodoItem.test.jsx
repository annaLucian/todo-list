import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoContext } from "../../Context/TodoContext";
import { TodoItem } from ".";

describe("Render <TodoItem/>", () => {
  const setup = (todoConfig = {}) => {
    const user = userEvent.setup();
    const mockHandleCompletedTodo = vi.fn();
    const mockHandleDeleteTodo = vi.fn();
    const mockHandleEditTodo = vi.fn();

    const defaultTodo = {
      id: crypto.randomUUID(),
      text: "hola",
      completed: false,
    };

    const todo = { ...defaultTodo, ...todoConfig };

    render(
      <TodoContext.Provider
        value={{
          handleCompletedTodo: mockHandleCompletedTodo,
          handleDeleteTodo: mockHandleDeleteTodo,
          handleEditTodo: mockHandleEditTodo,
        }}
      >
        <TodoItem todo={todo} />
      </TodoContext.Provider>,
    );

    return {
      user,
      mockHandleCompletedTodo,
      mockHandleDeleteTodo,
      mockHandleEditTodo,
      todo,
    };
  };

  it("should call handleCompletedTodo with ID 1", async () => {
    const { user, mockHandleCompletedTodo, todo } = setup();

    const inputCheck = screen.getByRole("checkbox");
    await user.click(inputCheck);

    expect(mockHandleCompletedTodo).toHaveBeenCalledWith(todo.id);
  });

  it("should display the text crossed out if the task is completed", () => {
    setup({ completed: true, text: "tarea completada" });
    const texto = screen.getByText(/tarea completada/i);
    expect(texto).toHaveClass("todo-list__itemText--completed");
  });

  it("should call handleDeleteTodo with the correct ID when 'X' is clicked", async () => {
    const { user, mockHandleDeleteTodo, todo } = setup();

    const btnDelete = screen.getByText(/x/i);
    await user.click(btnDelete);

    expect(mockHandleDeleteTodo).toHaveBeenCalledWith(todo.id);
  });

  it("should call handleEditTodo with correct arguments", async () => {
    const { user, mockHandleEditTodo, todo } = setup();
    const btnEdit = screen.getByText("Edit");

    await user.click(btnEdit);
    const inputEdit = screen.getByTestId("input-edit");
    await user.clear(inputEdit);
    await user.type(inputEdit, "Nueva tarea");
    const btnAdd = screen.getByText("AddTask");
    await user.click(btnAdd);
    expect(mockHandleEditTodo).toHaveBeenCalledWith(todo.id, "Nueva tarea");
  });
});
