import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './Layout';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import PlaygroundPage from './PlaygroundPage';

export default function CustomRouter() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/playground' component={PlaygroundPage} />
      </Route>
    </Router>
  );
}
