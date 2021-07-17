import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Login from "../pages/login";

test("The the login page", async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const id = screen.getByLabelText(/id/i);
  const name = screen.getByLabelText(/name/i);
  const loginBtn = screen.getByRole(/button/i);

  userEvent.type(id, "1");
  userEvent.type(name, "Pally");
  userEvent.click(loginBtn);
  await waitFor(() => expect(history.location.pathname).toBe("/task"));
});
