const express = require('express');

const router = express.Router();

const db = require('../data/db');

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