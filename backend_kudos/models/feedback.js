const mongoose = require("mongoose");
const User = require("./user");
const LearningSession = require("./learningSession");

const feedbackSchema = mongoose.Schema({
    reporterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    learningSession: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LearningSession"
    },
    rating: {
      type: Number,
      min: [0, "Rating must be positive"],
      max: [5, "Rating cannot be higher than 5"]
    },
    review: {
      type: String,
      maxLength: 150
    }
  },
  {
    timestamps: true
  }
);

feedbackSchema.pre("remove", async function(next){
  try{
    let learningSession = await LearningSession.findById(this.learningSession);
    learningSession.feedback.remove(this.id);
    await learningSession.save();
    return next();
  }
  catch(err){
    return next(err);
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
