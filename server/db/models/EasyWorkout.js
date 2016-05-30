const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const EasyWorkoutSchema = new Schema({
  Monday: {
    'Bench Press':  String, //setsAndReps[1],
    'Machine Chest Fly': String, //setsAndReps[8],
    'Cable Rope Pushdown': String, //setsAndReps[4],
    'Treadmill Running': String, //setsAndReps[12],
  },
  Tuesday: {
    'Rest Day': String, //'All Day',
  },
  Wednesday: {
    'Machine Leg Press': String, //setsAndReps[8],
    'Machine Leg Extension': String, //setsAndReps[2],
    'Machine Leg Curl': String, //setsAndReps[2],
    'Machine Should Press': String, //setsAndReps[2],
    'Treadmill Running': String, //setsAndReps[11],
  },
  Thursday: {
    'Seated Biking': String, //setsAndReps[13],
  },
  Friday: {
    'Rest Day': String, //'All Day',
  },
  Saturday: {
    'Machine Lat Pulldown': String, //setsAndReps[1],
    'Seated Cable Row': String, //setsAndReps[4],
    'Standiing Barbell Curl': String, //setsAndReps[1],
    'Machine curl': String, //setsAndReps[8],
    'Seated Biking': String, //setsAndReps[13],
  },
  Sunday: {
    'Rest Day': String, //'All day',
  },
});

const EasyWorkout = mongoose.model('EasyWorkout', EasyWorkoutSchema);
module.exports = EasyWorkout;
