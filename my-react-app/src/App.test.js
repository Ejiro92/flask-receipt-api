import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Receipt Generator title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Receipt Generator/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Get New Receipt button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /get new receipt/i });
  expect(buttonElement).toBeInTheDocument();
});

test("fetch button is disabled when loading", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /get new receipt/i });

  // Simulate a click event
  fireEvent.click(buttonElement);

  // The button should be disabled while loading
  expect(buttonElement).toBeDisabled();
});
