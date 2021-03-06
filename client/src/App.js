import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login";
import Task from "./pages/task";
import Dashboard from "./pages/dashboard";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/task" component={Task} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Provider>
  );
}

export default App;
