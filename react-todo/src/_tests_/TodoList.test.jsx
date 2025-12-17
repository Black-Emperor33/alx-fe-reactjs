import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New todo");
    const addButton = screen.getByText("Add");

    userEvent.type(input, "Write tests");
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
