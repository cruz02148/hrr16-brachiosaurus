const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'1 set until failure', '30 minutes', '45 minutes', '60 minutes'];

const NormalWorkoutSchema = new Schema({
  Monday: {
    'Bench Press': setsAndReps[1],
    'Dumbbell Incline Press': setsAndReps[2],
    'Cable Crossovers': setsAndReps[8],
    'Dumbbell Tricep Extensions': setsAndReps[7],
    'Cable Rope Pushdown': setsAndReps[4],
  },
  Tuesday: {
    'Treadmill Running': setsAndReps[13],
  },
  Wednesday: {
    'Barbell Squats': setsAndReps[6],
    'Dumbbell Lunges': setsAndReps[2],
    'Machine Leg Press': setsAndReps[9],
    'Dumbbell Shoulder Press': setsAndReps[1],
    'Dumbbell Lateral Raise': setsAndReps[3],
    'Machine Should Press': setsAndReps[8],
  },
  Thursday: {
    'Treadmill Running': setsAndReps[13],
  },
  Friday: {
    'Pull-ups': setsAndReps[0],
    'One-Arm Dumbbell Row': setsAndReps[3],
    'Machine Lat Pulldown': setsAndReps[4],
    'Barbell Curl': setsAndReps[6],
    'Dumbbell Bicep Curl': setsAndReps[7],
    'Cable Bicep Curl': setsAndReps[10],
  },
  Saturday: {
    'Treadmill Running': setsAndReps[11],
    'Seated Biking': setsAndReps[11],
    'Military Pushup': setsAndReps[10],
  },
  Sunday: {
    'Rest Day': 'All day',
  },
});

const NormalWorkout = mongoose.model('NormalWorkout', NormalWorkoutSchema);
module.exports = NormalWorkout;
