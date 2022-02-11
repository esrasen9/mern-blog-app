const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//http://localhost:5001/api/auth/signup
router.post("/signup", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//http://localhost:5001/api/auth/signin
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) res.status(404).json("User not found!")

        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        if (!validatePassword) res.status(400).json("Wrong password!")

        const {password, ...otherDetails} = user._doc;
        res.status(200).json(otherDetails);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;