const express = require('express');
const parser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
const firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: {
    projectId: "pocket-trainer-e754d",
    clientEmail: "server@pocket-trainer-e754d.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE" +
    " KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDOWmwoVPt9EDkm\nwKnCxX4aKycRdn0Fn2WpWy45AC4MI9n65JHCW5QmMW+COY652toNOoXlOE8hgJwU\nks5NaRu0ZfB8++mDX+qhyAxq9mKxletcbvsaAdE2bN7GYj5UGx8UAlSeJkAsDEk9\n+UBcikFrjil1kommBJjyta6DNAnZd3fhCyRGa9rP4rgOc7EFl3sVl6PhV1VAGwOS\nsSAB9+4EUNd0XYcHE4Y7R/0nvIBVHswpmroS3Ekb9IHPnQIE6+Bva1FOd8Ld9z2Q\nnyjqJNXJhvPYdX2qD3/fEJ9Awxr85K5DknKZQ9IreA494ooXvplc4RSSzbOghU5D\nSfxX/ihxAgMBAAECggEASRotcMhSY4bIyFq+iRqPxtN8vqn8Nm62hB2iLV1L8s8M\nnN42aOUqgbFHsJmVX3ARiVgvMPoWxmaaZItxfGj9AJaQcKaJnhnvtCp7g7UPV5wl\nyhQi7p6wMBi3fw40yHTnOJ5uvawNVc1wcP0I+P+dl23AcD9edirwyCLm1OItjxUp\nJgOOV4CLZHV1ua+q6Qs8cK+ZZe27iv0j5d18YJLkDJYU2S+uEbbbcInWdBq92lbE\nh+KpG9FfAaGX6gAR6NE74QOuuvdjpGpwBzXBRw9O/zfW9J+K6v0bbunFQjNUinoU\nQr8SWcRnG0grQZeQyZ/W0dfBq1aoMbu32tCeiNDFtQKBgQD7m8IW69urX5oBjaZ1\nC6Yn6WOrOOpDzKGl/T5T3F2ORb6tlSdMnOXJD5AQJnSub3pYb1MytHzz5qY7z7qa\n0bWBk5CeXE9mflRb7KEfhCuWBgK8yEDQtOCwwJppoBgP/xt3T5tSYrP2iVc8UZuJ\nFKOOk3ucpfhm99BzzuLkWFKdGwKBgQDR9HQ9GPJELeJ5XDCQh6yofBxlXITTKn5q\nuimAlRDj0w57QT3jguaSpgrVWqAWNGh97k+W0oe/HeavdeZwlbLZ2DWafkTTBRNV\ntVmr+UIC/c3IBbbTR5gKV3GnV92GUBG3VdfSIDx3dkBIjwScG4AKAeDWVQdz4vth\n/ED4u+ulYwKBgHup83w2knIpe9U1nNG8Vv8Y2+7k+2c1ZWHjFUY8chMiPnSscXNb\nTilDJ+h4LjMqAXUDyl2KjjuGar/M+odreQ1lzNe4wSG8B5RiulJ2MMH81E2bExhB\nPopBL+OoVwtNtF8w1kNo1dDfcevopEx8w2KpJEE65dseA+tXjPb0Xi5vAoGAVH3y\nAVx2sqVcjMZi7OcMvskjjE8NTQW+1iiQ5yQWJfkbzNJWm6ZkMAQOPAo6fnUc0AEF\nmoajBnB8E4R49jnoPe7as4+5FsrmGwneSm0G+bk2BRb3mlMnhpHmNRgRGCpE1uj+\n75r1eoXmHM0hZ8lRX7Wdy+NwGlzwGWCwrOjDTk0CgYEA6aVfsjpnKEE6vRdvlUDl\newojWlYGnibkq26RlLhGiOcOL/MG4e50ylfZLykbPl+euAM7e3cZ6a8p6jP3B6/m\nSbTBPaMFoD5WWD+GvQvTVWSIwZNWj4YWSt4NngIUFf3mSeteM+dO0AUe2VDXonLu\nHTdHow4R6J+vpiphe+xG4ac=\n-----END PRIVATE KEY-----\n",
  },
  databaseURL: "https://pocket-trainer-e754d.firebaseio.com/"
});

// const database = firebase.database();
// const root = database.ref('workouts/easy').toString();
// const rootData = database.ref('workouts/easy').once('value')
//   .then(function (snapshot) {
//     console.log(snapshot.toString());
//   });
// console.log(root);
// console.log(rootData);
// const workouts = root.child('workouts');
// const db = require('./db');
// const router = require('./routes.js');
// const User = require('./db/models/user.js');

app.use(express.static(`${__dirname}/../client`));
app.use(parser.json());
var database = firebase.database();
const workouts = database.ref('workouts/easy/monday');
console.log(workouts);
workouts.once("value", function(data) {
  console.log(data.app);
});

// router.get('/*', renderApp); // callback?
app.listen(port, () => console.log('Server running on port 3000!'));
module.exports = app;


// // routes
// app.use('/', router);
// app.use('/api/workout', router);
// app.use('/user', router);
//
// app.get('/api/workouts/easy', function (req, res){
//   User.find(function (err, data) {
//     console.log(data);
//     res.json(data);
//   });
// });
//
// app.post('/user', function (req, res){
//   const newUser = new User( {username: req.body.username, password: req.body.password} );
//   newUser.save(function (err) {
//     res.json(req.body);
//   });
// });
