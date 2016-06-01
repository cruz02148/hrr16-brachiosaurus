const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');
const User = require('./db/models/user.js');

app.use(express.static(`${__dirname}/../client`));
app.use(parser.json());

app.get('/user', function (req, res){
  User.find(function (err, data) {
    console.log(data);
    res.json(data);
  });
});

app.post('/user', function (req, res){
  const newUser = new User( {username: req.body.username, password: req.body.password} );
  newUser.save(function (err) {
    res.json(req.body);
  });
});

app.listen(port, () => console.log('Server running on port 3000!'));

module.exports = app;
