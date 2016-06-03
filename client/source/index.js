import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app.jsx';
import Header from './scripts/components/header.jsx';
require('./styles/style.css');
import { Router, Route, Link, browserHistory } from 'react-router';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={Header}/>
    </Route>
  </Router>
), document.getElementById('app'));
