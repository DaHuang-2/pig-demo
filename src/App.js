import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './global.less'
import City from './views/City'
import Home from './views/Home'
import HomeDetail from './views/HomeDetail'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path="/detail" component={HomeDetail}></Route>
        <Route path="/" component={Home}></Route>
       
      </Switch>
    </Router>
  )
}

export default App
