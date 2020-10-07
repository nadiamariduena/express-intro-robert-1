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

//
let teachers = [
  { name: "Joseph", id: 1 },
  { name: "Bleda", id: 2 },
  { name: "Benjamin", id: 3 },
  { name: "Mariam", id: 4 },
  { name: "Martina", id: 5 },
  { name: "Navqui", id: 6 },
  { name: "Vasilis", id: 7 },
  { name: "Rob", id: 8 },
];

//
//  ROUTES

//
app.get("/teachers", (req, res) => {
  //   console.log("Route /teachers called");
  //   Response.send("<h1>Hello from teachers</h1>");

  console.log("Route /teachers called");
  res.json(teachers);
});

// SET up a route for a Single Teacher
// ADD a unique key ID for each teacher, so to browse on them later

app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  res.json({ name: "Rob", id: 8 });
});
