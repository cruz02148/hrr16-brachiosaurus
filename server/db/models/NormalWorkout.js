const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const NormalWorkoutSchema = new Schema({
  Monday: {
    'Bench Press': String, //setsAndReps[1],
    'Dumbbell Incline Press': String, //setsAndReps[2],
    'Cable Crossovers': String, //setsAndReps[8],
    'Dumbbell Tricep Extensions': String, //setsAndReps[7],
    'Cable Rope Pushdown': String, //setsAndReps[4],
  },
  Tuesday: {
    'Treadmill Running': String, //setsAndReps[13],
  },
  Wednesday: {
    'Barbell Squats': String, //setsAndReps[6],
    'Dumbbell Lunges': String, //setsAndReps[2],
    'Machine Leg Press': String, //setsAndReps[9],
    'Dumbbell Shoulder Press': String, //setsAndReps[1],
    'Dumbbell Lateral Raise': String, //setsAndReps[3],
    'Machine Shoulder Press': String, //setsAndReps[8],
  },
  Thursday: {
    'Treadmill Running': String, //setsAndReps[13],
  },
  Friday: {
    'Pull-ups': String, //setsAndReps[0],
    'One-Arm Dumbbell Row': String, //setsAndReps[3],
    'Machine Lat Pulldown': String, //setsAndReps[4],
    'Barbell Curl': String, //setsAndReps[6],
    'Dumbbell Bicep Curl': String, //setsAndReps[7],
    'Cable Bicep Curl': String, //setsAndReps[10],
  },
  Saturday: {
    'Treadmill Running': String, //setsAndReps[11],
    'Seated Biking': String, //setsAndReps[11],
    'Military Pushup': String, //setsAndReps[10],
  },
  Sunday: {
    'Rest Day': String, //'All day',
  },
});

const NormalWorkout = mongoose.model('NormalWorkout', NormalWorkoutSchema);

const NormalWorkout1 = new NormalWorkout({});

module.exports = NormalWorkout;
