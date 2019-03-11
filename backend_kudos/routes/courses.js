const express = require("express");
const router = express.Router({mergeParams: true});

const {
  addCourse,
  getCourse,
  deleteCourse,
  editCourse
} = require("../handlers/courses");

router.route("/")
  .post(addCourse);

router.route("/:course_id")
  .get(getCourse)
  .delete(deleteCourse)
  .put(editCourse);

module.exports = router;
