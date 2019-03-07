const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/kudos", {
  keepAlive: true
});

module.exports.User = require("./user");
