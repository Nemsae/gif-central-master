import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './Layout';
import Home from './Home';

export default function CustomRouter() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  )
}
