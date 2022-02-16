const router = require('express').Router();
const Post = require("../models/Post");

//Create post
router.post("/",async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        try {
            if (post.username === req.body.username) {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
                res.status(200).json(updatedPost);
            } else {
                res.status(401).json("You can't update this post!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted successfully");
    } catch (err) {
        res.status(500).json();
    }
});

//Get post by id
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json("Post not found!");
    }
});

//Get all posts
router.get("/", async (req, res) => {
    const username = req.query.username;
    const categoryName = req.query.category;
    try {
        let posts;
        if (username) {
            posts = await Post.find({username});
        } else if (categoryName) {
            posts = await Post.find({
                categories: {
                    $in: [categoryName]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;