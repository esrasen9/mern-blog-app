const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Update User
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(saltRounds);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {$set: req.body},
                {new: true});
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("Something went wrong...");
    }
});

//Delete User
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted successfully...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("User not found!");
        }
    } else {
        res.status(401).json("You can't delete this account!");
    }
});

//Get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...otherDetails} = user._doc;
        res.status(200).json(otherDetails);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;