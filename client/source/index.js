import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/app.jsx';
import Workout from './scripts/components/Workout.jsx';
require('./styles/style.css');

//ReactDOM.render(<App />, document.getElementById('app'));

// This is the new component for the Workout. This will need to be modified to use React-Router
ReactDOM.render(<Workout />, document.getElementById('app'));
