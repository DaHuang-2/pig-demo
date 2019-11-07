import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./global.less";
import City from "./views/City";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Order from "./views/Member/Order";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default App;
