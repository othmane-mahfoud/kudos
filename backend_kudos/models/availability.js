const mongoose = require("mongoose");
const User = require("./user");

const availabilitySchema = mongoose.Schema({
    serviceProvider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    day: {
      type: Date,
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    booked: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);
