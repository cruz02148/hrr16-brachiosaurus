database.once('value').then(function (snapshot) {
  var username = snapshot.val().username;
});
