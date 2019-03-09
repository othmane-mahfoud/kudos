const mongoose = require("mongoose");
const User = require("./user");

const courseSchema = mongoose.Schema({
    courseCode: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    serviceProviders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  {
    timestamps: true
  }
);

courseSchema.pre("remove", async function(next){
  try{
    let user = await User.findById(this.user);
    user.courses.remove(this.id);
    await user.save();
    return next();
  }
  catch(err){
    return next(err);
  }
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
