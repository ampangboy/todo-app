import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/login";

test("The the login page", () => {
  render(<Login />);

  const id = screen.getByLabelText(/id/i);
  const name = screen.getByLabelText(/name/i);
  const loginBtn = screen.getByRole("button");

  userEvent.type(id, "1");
  userEvent.type(name, "Pally");
  userEvent.click(loginBtn);

  expect(global.window.location.pathname).toEqual("/task");
});
