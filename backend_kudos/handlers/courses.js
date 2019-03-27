const db = require("../models");

exports.addCourse = async function(req, res, next){
  try {
    let course = await db.Course.create({
      courseCode: req.body.courseCode,
      title: req.body.title,
      school: req.body.school,
      creator: req.params.id,
      imageUrl: req.body.imageUrl
    });
    // let foundUser = await db.User.findById(req.params.id);
    // foundUser.messages.push(message.id);
    // await foundUser.save();
    // let foundMessage = await db.Message.findById(message._id).populate("user", {
    //   username: true,
    //   profileImageUrl: true
    // });
    return res.status(200).json(course);
  }
  catch(err) {
    return next(err);
  }
};

exports.getCourse = async function(req, res, next){
  try {
    let course = await db.Course.findById(req.params.course_id);
    return res.status(200).json(course);
  }
  catch(e) {
    next(e);
  }
};

exports.deleteCourse = async function(req, res, next){
  try {
    let foundCourse = await db.Course.findById(req.params.course_id);
    await foundCourse.remove();
    return res.status(200).json(foundCourse);
  }
  catch(e) {
    return next(e);
  }
};

exports.editCourse = async function(req, res, next){
  try {
    let foundCourse = await db.Course.findOneAndUpdate({_id: req.params.course_id}, req.body, {new: true});
    await foundCourse.save();
    return res.status(200).json(foundCourse);
  }
  catch(e) {
    return next(e);
  }
};
