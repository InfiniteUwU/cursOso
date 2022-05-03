
const Course = require("../models/Course");

//For Course Creation Page
const courseCreateView = (req, res) => {
  res.render("courseCreate", {});
};

//Post Request

const createCourse = (req, res) => {
  const { name, teacher, description, cost } = req.body;

  if (!name || !teacher || !description || !cost ) {
    console.log("Fill empty fields");
  }

  Course.findOne({ name: name }).then((course) => {
      if (course) {
        console.log("course exists");
        res.render("courseCreate", {
          name,
          teacher,
          description,
          cost,
        });
      } else {
        //Validation
        const newCourse = new Course({
          name,
          teacher,
          description,
          cost,
        });
        newCourse
              .save()
              .then(res.redirect("/course"))
              .catch((err) => console.log(err));
      }
  });
};

// For View
const courseView = (req, res) => {
  res.render("course", {});
};

module.exports = {
  courseCreateView,
  createCourse,
  courseView,
};
