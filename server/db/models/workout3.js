const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsAndReps = ['3 sets of 6 reps', '3 sets of 8 reps', '3 sets of 10 reps',
'3 sets of 12 reps', '3 sets of 15 reps',
'4 sets of 6 reps', '4 sets of 8 reps', '4 sets of 10 reps',
'4 sets of 12 reps', '4 sets of 15 reps',
'3 sets until failure', '30 minutes', '45 minutes', '60 minutes'];

const HardWorkoutSchema = new Schema({
  Monday: {
    'Bench Press': setsAndReps[0],
    'Dumbbell Incline Press': setsAndReps[2],
    'Dumbbell Fly': setsAndReps[2],
    'Cable Crossovers': setsAndReps[8],
    'Military Pushups': setsAndReps[10],
    'Ab Crunches': setsAndReps[10],
    'Treadmill Running': setsAndReps[11],
  },
  Tuesday: {
    'Wide Grip Pullups': setsAndReps[0],
    'Barbell Row': setsAndReps[6],
    'Machine Lat Pulldown': setsAndReps[1],
    'Cable Seated Low Row': setsAndReps[2],
    'Cable Straight Arm Pulldown': setsAndReps[9],
    'Hanging Knee Raises': setsAndReps[10],
    'Seated Biking': setsAndReps[11],
  },
  Wednesday: {
    'Treadmill Running': setsAndReps[13],
  },
  Thursday: {
    'Standing Barbell Military Press': setsAndReps[2],
    'Dumbbell Lateral Raise': setsAndReps[7],
    'Seated Arnold Press': setsAndReps[5],
    'Machine Rear Raise': setsAndReps[7],
    'Dumbbell Shrugs': setsAndReps[9],
    'Incline Reverse Crunch': setsAndReps[10],
    'Side Plank': setsAndReps[10],
  },
  Friday: {
    'Barbell Curl': setsAndReps[6],
    'Seated Preacher Curl': setsAndReps[7],
    'Dumbbell Bicep Curl': setsAndReps[7],
    'Cable Bicep Curl': setsAndReps[8],
    'Close Grip Bench Press': setsAndReps[6],
    'Lying Skullcrusher': setsAndReps[7],
    'Standing Tricep Extension': setsAndReps[7],
    'Cable Rope Pushdown': setsAndReps[8],
  },
  Saturday: {
    'Treadmill Running': setsAndReps[11],
    'Seated Biking': setsAndReps[11],
    'Military Pushup': setsAndReps[10],
    'Wide Grip Pullup': setsAndReps[10],
    'Ab Curnch': setsAndReps[9],
    'Hanging Knee Raise': setsAndReps[8],
    'Incline Reverse Crunch': setsAndReps[8],
    'Side Plank': setsAndReps[10],
  },
  Sunday: {
    'Rest Day': 'All day',
  },
});

const HardWorkout = mongoose.model('HardWorkout', HardWorkoutSchema);
module.exports = HardWorkout;
