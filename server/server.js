const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const database = require("./db/");
const firebase = require("firebase");
const workouts = database.ref('workouts/Easy');

app.use(express.static(`${__dirname}/../client`));

// workouts.on("value", function(snap) {
//   console.log(snap.val());
// });

app.get('/api/workouts/easy', function (req, res){
  workouts.once("value", function(snap) {
    res.json(snap.val());
  });
});

app.listen(port, () => console.log('Server running on port 3000!'));
module.exports = app;




// app.use(parser.json());
// var database = firebase.database();
// const workouts = database.ref('workouts/easy/monday');
// console.log(workouts);
// workouts.once("value", function(data) {
//   console.log(data.app);
// });

// const reactApp = React.createFactory(require('../client/source/scripts/components/app.jsx'));
// const workout = React.createFactory(require('../client/source/scripts/components/Workout.jsx'));
//
//
// app.get('/', function(req, res) {
//   const reactHtml = React.renderToString(reactApp({}));
//   res.render('index.ejs', {reactOutput: reactHtml});
// });
//
// app.get('/workouts', function(req, res) {
//   const workoutHtml = React.renderToString(workout({}));
//   res.render('index.ejs', {reactOutput: workoutHtml});
// });

// const database = firebase.database();
// const root = database.ref('workouts/easy').toString();
// const rootData = database.ref('workouts/easy').once('value')
//   .then(function (snapshot) {
//     console.log(snapshot.toString());
//   });
// console.log(root);
// console.log(rootData);
// const workouts = root.child('workouts');
// const db = require('./db');
// const router = require('./routes.js');
// const User = require('./db/models/user.js');


// // routes
// app.use('/', router);
// app.use('/api/workout', router);
// app.use('/user', router);
//
// app.get('/api/workouts/easy', function (req, res){
//   User.find(function (err, data) {
//     console.log(data);
//     res.json(data);
//   });
// });
//
// app.post('/user', function (req, res){
//   const newUser = new User( {username: req.body.username, password: req.body.password} );
//   newUser.save(function (err) {
//     res.json(req.body);
//   });
// });
