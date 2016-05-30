const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'3 sets until failure', '30 minutes', '45 minutes', '60 minutes'];

const HardWorkoutSchema = new Schema({
  Monday: {
    'Bench Press': String, // setsAndReps[0],
    'Dumbbell Incline Press': String, // setsAndReps[2],
    'Dumbbell Fly': String, // setsAndReps[2],
    'Cable Crossovers': String, // setsAndReps[8],
    'Military Pushups': String, // setsAndReps[10],
    'Ab Crunches': String, // setsAndReps[10],
    'Treadmill Running': String, // setsAndReps[11],
  },
  Tuesday: {
    'Wide Grip Pullups': String, // setsAndReps[0],
    'Barbell Row': String, // setsAndReps[6],
    'Machine Lat Pulldown': String, // setsAndReps[1],
    'Cable Seated Low Row': String, // setsAndReps[2],
    'Cable Straight Arm Pulldown': String, // setsAndReps[9],
    'Hanging Knee Raises': String, // setsAndReps[10],
    'Seated Biking': String, // setsAndReps[11],
  },
  Wednesday: {
    'Treadmill Running': String, // setsAndReps[13],
  },
  Thursday: {
    'Standing Barbell Military Press': String, // setsAndReps[2],
    'Dumbbell Lateral Raise': String, // setsAndReps[7],
    'Seated Arnold Press': String, // setsAndReps[5],
    'Machine Rear Raise': String, // setsAndReps[7],
    'Dumbbell Shrugs': String, // setsAndReps[9],
    'Incline Reverse Crunch': String, // setsAndReps[10],
    'Side Plank': String, // setsAndReps[10],
  },
  Friday: {
    'Barbell Curl': String, // setsAndReps[6],
    'Seated Preacher Curl': String, // setsAndReps[7],
    'Dumbbell Bicep Curl': String, // setsAndReps[7],
    'Cable Bicep Curl': String, // setsAndReps[8],
    'Close Grip Bench Press': String, // setsAndReps[6],
    'Lying Skullcrusher': String, // setsAndReps[7],
    'Standing Tricep Extension': String, // setsAndReps[7],
    'Cable Rope Pushdown': String, // setsAndReps[8],
  },
  Saturday: {
    'Treadmill Running': String, // setsAndReps[11],
    'Seated Biking': String, // setsAndReps[11],
    'Military Pushup': String, // setsAndReps[10],
    'Wide Grip Pullup': String, // setsAndReps[10],
    'Ab Curnch': String, // setsAndReps[9],
    'Hanging Knee Raise': String, // setsAndReps[8],
    'Incline Reverse Crunch': String, // setsAndReps[8],
    'Side Plank': String, // setsAndReps[10],
  },
  Sunday: {
    'Rest Day': String, // 'All day',
  },
});

const HardWorkout = mongoose.model('HardWorkout', HardWorkoutSchema);
module.exports = HardWorkout;
