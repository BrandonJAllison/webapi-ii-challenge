const express = require('express');

const router = express.Router();

const db = require('../data/db');

//Add new posts using router
router.post('/', (req, res) => {
    const newPost = req.body;
    if (newPost.title && newPost.contents) {
        db.insert(newPost)
            .then(postIdObj => {
                db.findById(postIdObj.id)
                    .then(post => {
                        res.status(201).json(post);
                    });
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error while saving the post to the database." });
            });

    } else {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
    }
});

//Get all posts that begin with /api/posts
router.get('/', (req, res) => {
    db.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.status(500).json({ error: "The posts information could not be retrieved." });
        });
});

//Get all posts that begin with /api/posts/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id).then(post => {
        if (post.length) {
            res.json(post);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    }).catch(err => {
        res.status(500).json({ error: "The post information could not be retrieved." });
    });
});



module.exports = router;