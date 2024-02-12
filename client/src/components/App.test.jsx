/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
import App from "./App.js";

test("app is rendering", () => {
  render(<App />);
  const productsHeader = screen.getByRole("heading", { name: "Products" });
  expect(productsHeader).toBeInTheDocument();
});
