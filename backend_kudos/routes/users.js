const express = require("express");
const router = express.Router({mergeParams: true});

const {
  getUser,
  deleteUser,
  editUser,
  getServiceProviders
} = require("../handlers/users");

router.route("/serviceProviders")
  .get(getServiceProviders);

router.route("/:user_id")
  .get(getUser)
  .delete(deleteUser)
  .put(editUser);

module.exports = router;
