const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const WeightLossSchema = new Schema({
  Monday: {
    'Bench Press': setsAndReps[1],
    'Cable Crossovers': setsAndReps[8],
    'Dumbbell Tricep Extensions': setsAndReps[7],
    'Cable Rope Pushdown': setsAndReps[4],
    'Treadmill Running': setsAndReps[12],
  },
  Tuesday: {
    'Treadmill Running': setsAndReps[13],
  },
  Wednesday: {
    'Barbell Squats': setsAndReps[6],
    'Machine Leg Press': setsAndReps[9],
    'Dumbbell Shoulder Press': setsAndReps[1],
    'Seated Biking': setsAndReps[12]
  },
  Thursday: {
    'Rowing Machine': setsAndReps[13],
  },
  Friday: {
    'One-Arm Dumbbell Row': setsAndReps[3],
    'Machine Lat Pulldown': setsAndReps[4],
    'Dumbbell Bicep Curl': setsAndReps[7],
    'Seated Biking': setsAndReps[13],
  },
  Saturday: {
    'Treadmill Running': setsAndReps[12],
    'Rowing Machine': setsAndReps[12],
  },
  Sunday: {
    'Rest Day': 'All day',
  },
});

const WeightLoss = mongoose.model('WeightLoss', WeightLossSchema);
module.exports = WeightLoss;
