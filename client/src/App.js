import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login";
import Task from "./pages/task";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/task" component={Task} />
      </Switch>
    </Provider>
  );
}

export default App;
