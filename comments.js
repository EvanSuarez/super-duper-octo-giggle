// Create web server
// Import express module
const express = require('express');
// Import body-parser module
const bodyParser = require('body-parser');
// Import comments.js
const comments = require('./comments');
// Import comments.js
const posts = require('./posts');
// Create web server
const app = express();
// Use body-parser
app.use(bodyParser.json());
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});
// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.getComment(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});
// Create a comment
app.post('/comments', (req, res) => {
    const comment = comments.addComment(req.body);
    res.status(201).json(comment);
});
// Update a comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.updateComment(req.params.id, req.body);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});
// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.deleteComment(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});
// Get all posts
app.get('/posts', (req, res) => {
    res.json(posts.getPosts());
});
// Get a post by id
app.get('/posts/:id', (req, res) => {
    const post = posts.getPost(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});
// Create a post
app.post('/posts', (req, res) => {
    const post = posts.addPost(req.body);
    res.status(201).json(post);
});
// Update a post
app.put('/posts/:id', (req, res) => {
    const post = posts.updatePost(req.params.id, req.body);
    if (post) {
        res