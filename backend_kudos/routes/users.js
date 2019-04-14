const express = require("express");
const router = express.Router({mergeParams: true});

const {
  getUser,
  deleteUser,
  editUser,
  getServiceProviders,
  getLearners,
  addTutor,
  addMentor,
  removeServiceProvider
} = require("../handlers/users");

router.route("/serviceProviders")
  .get(getServiceProviders);

router.route("/serviceProviders/removeServiceProvider/:user_id")
  .put(removeServiceProvider);

router.route("/learners")
  .get(getLearners);

router.route("/learners/makeTutor/:user_id")
  .put(addTutor);

router.route("/learners/makeMentor/:user_id")
  .put(addMentor);

router.route("/:user_id")
  .get(getUser)
  .delete(deleteUser)
  .put(editUser);

module.exports = router;
