const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bluebird = require('bluebird');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
const user1 = new User( {username: 'Mike', password:'password'} );
user1.save();
// User.comparePassword = function (candidatePassword, savedPassword, cb) {
//   bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// userSchema.pre('save', function (next){
//   const cipher = bluebird.promisify(bcrypt.hash);
//   return cipher(this.password, null, null).bind(this)
//     .then(function (hash) {
//       this.password = hash;
//       next();
//     });
// });

module.exports = User;
module.exports.User1 = user1;
