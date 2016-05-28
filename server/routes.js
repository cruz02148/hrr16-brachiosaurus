// var controllers = require('./controllers');
const express = require('express');
const parser = require('body-parser');
const router = require('express').Router();
const EasyWorkout = require('./db/models/EasyWorkout');
const NormalWorkout = require('./db/models/NormalWorkout');
const HardWorkout = require('./db/models/HardWorkout');
const WeightLoss = require('./db/models/WeightLoss');
const User = require('./db/models/user');

module.exports = {
  home: router.route('/')
    .all(function (req, res) {
      /* can use .all which is called for all requests to a given path (e.g.
       use it to turn endpoint characters to uppercase, etc.) */
    })
    .get(function (req, res) {
      console.log('hello!');
    })
    .post(function (req, res) {
    }),

  users: router.route('/')
    .all(function (req, res) {
      /* can use .all which is called for all requests to a given path (e.g.
       use it to turn endpoint characters to uppercase, etc.) */
    })
    .get(function (req, res) {
    })
    .post(function (req, res) {
    }),
};


// router.route('/')
//   .all(function (req, res) {
//
//   })
//   .get(function (req, res) {
//     WeightLoss.find(function(data) {
//       console.log(data);
//     });
//     console.log(res, 'Hello world!');
//     // if (req.body.goal === 'weight loss') { // Weight Loss set of workouts
//     //   if (req.body.gender === 'male') {
//     //     NormalWorkout.find(function (data) {
//     //       res.json(data);
//     //     });
//     //   } else {
//     //     WeightLoss.find(function (data) {
//     //       res.json(data);
//     //     });
//     //   }
//     // } else { // Muscle Building set of workouts
//     //   if (req.body.gender === 'male') {
//     //     // Easy workout
//     //     HardWorkout.find(function (data) {
//     //       res.json(data);
//     //     });
//     //   } else {
//     //     // Hard workout
//     //     EasyWorkout.find(function (data) {
//     //       res.json(data);
//     //     });
//     //   }
//     // }
//     // if req.body.age === ? && req.body.gener === ?
//     // grab workout 1 from database
//     // serve that workout
//   })
//   .post(function (req, res) {
//     // this is for logging in
//     // let username = req.body.username;
//     // let password = req.body.password;
//     // User.findOne({
//     //    username: username
//     //  })
//     //  .exec()
//     //  .then(function(user) {
//     //    user.comparePassword(password, function(match) {
//     //      if (match) {
//     //        console.log('match!!!!!!!!');
//     //      } else {
//     //        console.log('You shall not pass!')
//     //      }
//     //    })
//     //  });
//
//
//     // this is for signing up
//     let username = req.body.username;
//     let password = req.body.password;
//
//     User.findOne({
//       username: username
//     })
//       .exec(function (err, user) {
//         if (!user) {
//           var newUser = new User({
//             username: username,
//             password: password
//           });
//           newUser.save(function (err, newUser) {
//             if (err) {
//               res.send(500, err);
//             }
//             // util.createSession(req, res, newUser);
//           });
//         } else {
//           console.log('Account already exists');
//           res.redirect('/signup');
//         }
//       });
//   });
//
//
// /*
//  Notes
//  ====================
//  - properties set on the request block can be accessed from all routes in the app
//  - request.query to access queries. request.query.limit to access each specific query
//  - request.method, request.url, request.body
//  - endpoints refers to the point where you lead users for each route (or url).
//
//  Dynamic routes
//  ====================
//  - router.route('/:name').all().get().post()
//  - can be accessed with request.params.name
//
//
//  Query strings
//  ====================
//  - Insert after the question mark, following the path.
//  - /blocks?limit=1
//
//  */
//
// // // path is relative to where it's mounted in server.js
// // router.route('/')
// //   .all(function (req, res) {
// //     /* can use .all which is called for all requests to a given path (e.g.
// //      use it to turn endpoint characters to uppercase, etc.) */
// //   })
// //   .get(function (req, res) {
// //   })
// //   .post(function (req, res) {
// //   });
//
// module.exports = router;
