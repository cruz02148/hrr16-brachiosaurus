// database.once('value').then(function (snapshot) {
//   var username = snapshot.val().username;
// });
var database = firebase.database();
const workouts = database.ref('workouts/easy');

// workouts.once("value", function(data) {
//   console.log(data);
// });
console.log(workouts);
