const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EventModel = require("./models/models");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/local_events");

// F O R   E V E N T S

app.post("/createEvent", (req, res) => {
  console.log(req.body);
  EventModel.create(req.body)
    .then((events) => res.json(events))
    .catch((err) => res.json(err));
});

app.get("/events", (req, res) => {
  EventModel.find({})
    .then((events) => res.json(events))
    .catch((err) => console.log(err));
});

app.get("/getEvent/:id", (req, res) => {
  const id = req.params.id;
  EventModel.findById({ _id: id })
    .then((event) => res.json(event))
    .catch((err) => console.log(err));
});

app.put("/updateEvent/:id", (req, res) => {
  const id = req.params.id;
  EventModel.findByIdAndUpdate(
    { _id: id },
    {
      eventName: req.body.modelName,
      eventDescription: req.body.modelDescription,
      eventPrice: req.body.eventPrice,
      eventVenue: req.body.eventVenue,
    }
  )
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
});

app.delete("/deleteEvent/:id", (req, res) => {
  const id = req.params.id;
  EventModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
