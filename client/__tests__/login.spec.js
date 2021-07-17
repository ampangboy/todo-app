import React from "react";
import { getByLabelText, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Login from "../src/pages/login";

test("The the login page", () => {
  render(<Login />);
  const id = screen.getByLabelText("id");
  const name = screen.getByLabelText("Name");

  //how to get the id value??
});
