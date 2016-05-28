const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');
const router = require('express').Router();
// const router = require('./routes.js');
const parseUrlencoded = parser.urlencoded({ extended: false });
const User = require('./db/models/user.js');


app.use(express.static(`${__dirname}/../client`));
app.use(parser.json());


// syntax if we weren't using express router and an imported routes file
app.get('/user', function (req, res){
  // res.send('hello world');
  User.find(function (err, data) {
    console.log(data);
    res.json(data);
  });
});

app.post('/user', function (req, res){
  const newUser = new User( {username: req.body.username, password: req.body.password} );
  newUser.save(function (err) {
    // if (err) {
    //   next(err);
    // }
    res.json(req.body);
  });
});

// app.post('/', function(req, res){
//   res.send('hello world');
// });


// // codeschool uses parseUrlencoded, too
//   .post(parseUrlencoded, function(req, res) {
//     res.send('Add a book');
//   });

app.listen(port, () => console.log('Server running on port 3000!'));

module.exports = app;
