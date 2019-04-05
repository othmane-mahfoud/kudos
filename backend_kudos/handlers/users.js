const db = require("../models");

exports.getUser = async function(req, res, next){
  try {
    let user = await db.User.findById(req.params.user_id);
    return res.status(200).json(user);
  }
  catch(e) {
    next(e);
  }
};

exports.deleteUser = async function(req, res, next){
  try {
    let foundUser = await db.User.findById(req.params.user_id);
    await foundUser.remove();
    return res.status(200).json(foundUser);
  }
  catch(e) {
    return next(e);
  }
};

exports.editUser = async function(req, res, next){
  try {
    let foundUser = await db.User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true});
    await foundUser.save();
    return res.status(200).json(foundUser);
  }
  catch(e) {
    return next(e);
  }
};

exports.getServiceProviders = async function(req, res, next){
  try {
    let users = await db.User.find({role: "serviceprovider"})
      .sort({firstName: "asc"});
    return res.status(200).json(users);
  }
  catch(err) {
    return next(err);
  }
}

exports.getLearners = async function(req, res, next){
  try {
    let learners = await db.User.find({role: "learner"})
      .sort({firstName: "asc"});
    return res.status(200).json(learners);
  }
  catch(err) {
    return next(err);
  }
}
