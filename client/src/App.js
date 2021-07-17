import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Task from "./pages/task";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/task" component={Task} />
    </Switch>
  );
}

export default App;
