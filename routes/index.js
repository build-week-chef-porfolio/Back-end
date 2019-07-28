const express = require('express');
const { createNewUser, createNewPost, getAllPosts, updatePost, deletePost, getThePostById } = require('../controllers');
const { loginUser } = require('../controllers');
const { authenticate } = require('../auth/authenticate');

const { addUserValidator, addPostValidator, validateProjectId } = require('../middleware');

const router = express.Router();

router.post('/users/register', addUserValidator, createNewUser);
router.post('/users/login', addUserValidator, loginUser);
router.post('/users/post', authenticate, addPostValidator, createNewPost);
router.put('/users/post/:id', authenticate, validateProjectId, addPostValidator, updatePost);
router.delete('/users/post/:id', authenticate, validateProjectId, deletePost);
router.get('/users/post', authenticate, getAllPosts);
router.get('/users/post/:id', authenticate, getThePostById);
router.delete('/users');

module.exports = router;
