const express = require('express');
const { createNewUser, createNewPost, getAllPosts, updatePost,
  deletePost, getThePostById } = require('../controllers');

const { loginUser } = require('../controllers');
const { authenticate } = require('../auth/authenticate');

const { addUserValidator, addPostValidator, validatePostId } = require('../middleware');

const router = express.Router();

router.post('/users/register', addUserValidator, createNewUser);
router.post('/users/login', addUserValidator, loginUser);
router.post('/users/post', authenticate, addPostValidator, createNewPost);
router.put('/users/post/:id', authenticate, validatePostId, addPostValidator, updatePost);
router.delete('/users/post/:id', authenticate, validatePostId, deletePost);
router.get('/users/post', authenticate, getAllPosts);
router.get('/users/post/:id', authenticate, getThePostById);
// router.post('/users/logout', logOut);

module.exports = router;
