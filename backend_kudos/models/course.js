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
    school: {
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
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

courseSchema.virtual('school.picture')
  .get(function() {
    if(this.school === "SSE")
      return "../images/sse.png";
    else if(this.school === "SBA")
      return "../images/sba.png";
    else if(this.school === "SHSS")
      return "../images/shss.png"
  });

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
