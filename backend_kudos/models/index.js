const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/kudos", {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
module.exports.Course = require("./course");
module.exports.Availability = require("./availability");
module.exports.Feedback = require("./feedback");
module.exports.LearningSession = require("./learningSession");
