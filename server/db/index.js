const mongoose = require('mongoose');

const mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/trainer';
mongoose.connect(mongoURI);
// mongoose.connect('mongodb://localhost/trainer');

// Run in seperate terminal window using 'mongod'
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
