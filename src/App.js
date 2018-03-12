import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './container/dashboard';
import Categories from './container/dashboard/categories';
import Category from './container/dashboard/category';

class App extends Component {
  render() {
    return ( 
      <Router>
        <Dashboard>
          <Switch>
          <Route exact path={"/"} component={Categories} />
          <Route path={"/category"} component={ Category } />
          </Switch>
        </Dashboard>
      </Router>
    );
  }
}

export default App;
