const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: Array,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  
  cost: {
    type: Number,
    required: true,
  },

});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
