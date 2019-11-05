import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./global.less";
import City from "./views/City";
import Home from "./views/Home";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default App;
