
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

const deleteCourse = (req, res) => {
  const {name} = req.body;
  Course.findOne({ name: name }).then((course) => {
    if (course) {
      console.log("course exists");
      Course.remove({ name }, (err, results) => {
      // if error found
      if(err){
          console.log(`no se pueden eliminar el usuario con el nombre ${name}`);
          process.exit(1);
      }
      // success
      console.log(`course ${name} eliminado`);
      process.exit(0);
    });
  }
})
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
