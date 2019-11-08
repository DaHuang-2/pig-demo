<<<<<<< HEAD
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './global.less'
import City from './views/City'
import Home from './views/Home'
import HomeDetail from './views/HomeDetail'
=======
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./global.less";
import City from "./views/City";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Order from "./views/Member/Order";
>>>>>>> d91ad67a7e3f6024c2dfbbd94e92528834ac0c56

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
<<<<<<< HEAD
        <Route path="/detail" component={HomeDetail}></Route>
=======
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/order" component={Order}></Route>
>>>>>>> d91ad67a7e3f6024c2dfbbd94e92528834ac0c56
        <Route path="/" component={Home}></Route>
       
      </Switch>
    </Router>
  );
};

export default App;
