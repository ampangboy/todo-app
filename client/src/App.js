import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;