const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const events = [
  { name: "Music Concert", date: "April 10" },
  { name: "Tech Workshop", date: "April 15" },
  { name: "Art Exhibition", date: "April 20" }
];

app.get("/events", (req, res) => {
  res.json(events);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});