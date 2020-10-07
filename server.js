const express = require("express");
//
// Express is a library to create concrete API
const app = express();
//
//
// the port 5000 can be also 3000 etc , this will help the app to be public
const port = 5000;

// (()=> {})  callback function
app.listen(port, () => {
  // listening is opening aport in our machine
  console.log(`Started server on port ${port}`);
});
