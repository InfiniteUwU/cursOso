//For Register Page
const registerView = (req, res) => {
    res.render("register", {});
  };
  
  //Post Request for Register
  
  const registerUser = (req, res) => {
    const { name, email, teacher, password, confirm } = req.body;
  
    if (!name || !email || !password || !confirm) {
      console.log("Fill empty fields");
    }
  
    //Confirm Passwords
  
    if (password !== confirm) {
      console.log("Password must match");
    } else {
      //Validation
      User.findOne({ email: email }).then((user) => {
        if (user) {
          console.log("email exists");
          res.render("register", {
            name,
            email,
            password,
            confirm,
          });
        } else {
          //Validation
          const newUser = new User({
            name,
            email,
            teacher,
            password,
          });
          //Password Hashing
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
  
              newUser.password = hash;
              newUser
                .save()
                .then(res.redirect("/login"))
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  };
  
  const deleteUser = (req, res) => {
    const {email} = req.body;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        console.log("email exists");
        User.remove({ email }, (err, results) => {
        // if error found
        if(err){
            console.log(`no se pueden eliminar el usuario con el nombre ${email}`);
            process.exit(1);
        }
        // success
        console.log(`usuario ${email} eliminado`);
        process.exit(0);
      });
    }
  })
};


  // For View
  const loginView = (req, res) => {
    res.render("login", {});
  };
  
  //Logging in Function
  
  const loginUser = (req, res) => {
    const { email, password } = req.body;
  
    //Required
    if (!email || !password) {
      console.log("Please fill in all the fields");
      res.render("login", {
        email,
        password,
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res);
    }
  };
  
  module.exports = {
    registerView,
    loginView,
    registerUser,
    loginUser,
    deleteUser,
  };