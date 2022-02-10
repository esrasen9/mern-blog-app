const router = require('express').Router();
const User = require("../models/User");

//http://localhost:5001/auth/signup
//SignUp
router.post("/signup",async (req, res) => {
  try {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
    const user = await newUser.save();
    res.status(200).json(user);
  }
  catch(err){
     res.status(500).json(err);
  }
});

module.exports = router;