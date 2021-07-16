import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import login from './pages/login.js';
import create from './pages/create.js';

// handles the logic when navbar elements are clieked
class Routes extends Component  {
  render() {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={login}></Route>
      <Route exact path='/create' component={create}></Route>
    </Switch>
  );
  }
}

export default Routes;