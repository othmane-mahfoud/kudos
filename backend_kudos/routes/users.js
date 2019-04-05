const express = require("express");
const router = express.Router({mergeParams: true});

const {
  getUser,
  deleteUser,
  editUser,
  getServiceProviders,
  getLearners
} = require("../handlers/users");

router.route("/serviceProviders")
  .get(getServiceProviders);

router.route("/learners")
  .get(getLearners);

router.route("/:user_id")
  .get(getUser)
  .delete(deleteUser)
  .put(editUser);

module.exports = router;
