const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exercises = ['3 sets, 10 reps', 'Squat', 'Pull Ups'];
const workoutSchema = new Schema({
  mon: {
    'Bench Press': exercises[0],
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  tues: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  wed: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  thurs: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  fri: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  sat: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
  sun: {
    'Bench Press': '3 sets, 10 reps',
    'Squat': '3 sets, 10 reps',
    'Pull Ups': '3 sets, 10 reps',
    'Presses': '3 sets, 10 reps',
  },
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
