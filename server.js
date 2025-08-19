'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Async hash:", hash);

  bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
    if (err) throw err;
    console.log("Async compare result:", result);
  });
});

//END_ASYNC

//START_SYNC
const hashSync = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("Sync hash:", hashSync);

const resultSync = bcrypt.compareSync(myPlaintextPassword, hashSync);
console.log("Sync compare result:", resultSync);

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
