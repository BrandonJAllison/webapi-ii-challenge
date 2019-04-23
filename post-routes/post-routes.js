const express = require('express');

const router = express.Router();

const db = require('../data/db');

//Add new posts using router
router.post('/', (req, res) => {
    const newPost = req.body;
    if (newPost.title && newPost.contents) {
        db.insert(newPost)
            .then(postIdObj => {
                db.find()
            .then(posts => {
            res.json(posts);
                        })
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


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const postChanges = req.body;

    if (postChanges.title || postChanges.contents) {

        db.update(id, postChanges)
            .then(isUpdated => {
                if (isUpdated) {
                    db.findById(id)
                        .then(post => {
                            res.json(post);
                        });
                } else {
                    res.status(404).json({ message: "The post with the specified ID does not exist." });
                }
            }).catch(err => {
                res.status(500).json({ error: "The post information could not be modified." });
            });
    } else {
        res.status(400).json({ errorMessage: "Please provide title or contents for the post." });
    }
})


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id).then(post => {
        const deletedPost = post;
        db.remove(id)
            .then(countDeleted => {
                if (countDeleted) {
                    db.find()
                    .then(posts => {
                        res.json(posts);
                    })
                } else {
                    res.status(404).json({ message: "The post with the specified ID does not exist." });
                }
            })
            .catch(err => {
                res.status(500).json({ error: "The post could not be removed" });
            })
    }).catch(err => {
        res.status(500).json({ error: "The post information could not be retrieved." });
    })
});




module.exports = router;