const mongoose = require("mongoose");
const User = require("./user");
const Feedback = require("./feedback");

const learningSessionSchema = mongoose.Schema({
    serviceProvider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    sessiontype: {
      type: String
    },
    topic: {
      type: String,
      required: true
    },
    date: {
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
    feedback: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback"
      }
    ]
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

// Implement averageRating as a virtual attribute

// learningSessionSchema.virtual("feedback.averageRating").get(function(){
//   var totalFeedback = this.feedback.length;
//   var ratingSum = 0;
//   this.feedback.forEach(function(element){
//     try {
//       let foundFeedback = await Feedback.findById(element.id);
//       ratingSum += foundFeedback.rating;
//     }
//     catch(err) {
//       next(err);
//     }
//   });
// });

const LearningSession = mongoose.model("LearningSession", learningSessionSchema);

module.exports = LearningSession;
