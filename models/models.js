const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: String,
    eventDescription: String,
    eventVenue: String,
    eventPrice: String,
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model("models", EventSchema);
module.exports = EventModel;
