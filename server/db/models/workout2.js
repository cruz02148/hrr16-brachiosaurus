const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const EasyWorkoutSchema = new Schema({
  Monday: {
    'Bench Press': setsAndReps[1],
    'Machine Chest Fly': setsAndReps[8],
    'Cable Rope Pushdown': setsAndReps[4],
    'Treadmill Running': setsAndReps[12],
  },
  Tuesday: {
    'Rest Day': 'All Day',
  },
  Wednesday: {
    'Machine Leg Press': setsAndReps[8],
    'Machine Leg Extension': setsAndReps[2],
    'Machine Leg Curl': setsAndReps[2],
    'Machine Should Press': setsAndReps[2],
    'Treadmill Running': setsAndReps[11],
  },
  Thursday: {
    'Seated Biking': setsAndReps[13],
  },
  Friday: {
    'Rest Day': 'All Day',
  },
  Saturday: {
    'Machine Lat Pulldown': setsAndReps[1],
    'Seated Cable Row': setsAndReps[4],
    'Standiing Barbell Curl': setsAndReps[1],
    'Machine curl': setsAndReps[8],
    'Seated Biking': setsAndReps[13],
  },
  Sunday: {
    'Rest Day': 'All day',
  },
});

const EasyWorkout = mongoose.model('EasyWorkout', EasyWorkoutSchema);
module.exports = EasyWorkout;
