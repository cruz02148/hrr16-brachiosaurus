const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const WeightLossSchema = new Schema({
  Monday: {
    'Bench Press': String, // setsAndReps[1],
    'Cable Crossovers': String, // setsAndReps[8],
    'Dumbbell Tricep Extensions': String, // setsAndReps[7],
    'Cable Rope Pushdown': String, // setsAndReps[4],
    'Treadmill Running': String, // setsAndReps[12],
  },
  Tuesday: {
    'Treadmill Running': String, // setsAndReps[13],
  },
  Wednesday: {
    'Barbell Squats': String, // setsAndReps[6],
    'Machine Leg Press': String, // setsAndReps[9],
    'Dumbbell Shoulder Press': String, // setsAndReps[1],
    'Seated Biking': String, // setsAndReps[12]
  },
  Thursday: {
    'Rowing Machine': String, // setsAndReps[13],
  },
  Friday: {
    'One-Arm Dumbbell Row': String, // setsAndReps[3],
    'Machine Lat Pulldown': String, // setsAndReps[4],
    'Dumbbell Bicep Curl': String, // setsAndReps[7],
    'Seated Biking': String, // setsAndReps[13],
  },
  Saturday: {
    'Treadmill Running': String, // setsAndReps[12],
    'Rowing Machine': String, // setsAndReps[12],
  },
  Sunday: {
    'Rest Day': String, // 'All day',
  },
});

const WeightLoss = mongoose.model('WeightLoss', WeightLossSchema);
module.exports = WeightLoss;
