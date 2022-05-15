const express = require("express");

const {
  courseCreateView,
  createCourse,
  courseView,
  deleteCourse,
  addStudenttoCourse,
} = require("../controllers/CourseController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/course", courseView);


router.get("/courseCreate", courseCreateView);
router.post("/courseCreate", createCourse);

module.exports = router;
