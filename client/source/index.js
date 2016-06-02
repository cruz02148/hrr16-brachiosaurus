import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './scripts/components/app.jsx';
import Header from './scripts/components/header.jsx';
import Prompt from './scripts/components/prompt.jsx';
import Workout from './scripts/components/Workout.jsx';
import QuestionAge from './scripts/components/QuestionAge.jsx';
import QuestionGender from './scripts/components/QuestionGender.jsx';
import QuestionGoal from './scripts/components/QuestionGoal.jsx';
require('./styles/style.css');

//ReactDOM.render(<App />, document.getElementById('app'));

// This is the new component for the Workout. This will need to be modified to use React-Router
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="header" component={Header}/>
      <Route path="prompt" component={Prompt}>
        <Route path="age" component={QuestionAge}></Route>
        <Route path="gender" component={QuestionGender}></Route>
        <Route path="goal" component={QuestionGoal}></Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
