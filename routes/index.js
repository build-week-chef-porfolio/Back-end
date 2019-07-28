const express = require('express');
const { createNewUser, createNewPost, getAllPosts, updatePost, deletePost, getThePostById } = require('../controllers');
const { loginUser } = require('../controllers');
const { authenticate } = require('../auth/authenticate');

const { addUserValidator, addPostValidator, validateProjectId } = require('../middleware');

const router = express.Router();

router.post('/users/register', addUserValidator, createNewUser);
router.post('/users/login', addUserValidator, loginUser);
router.post('/users/post', addPostValidator, createNewPost);
router.put('/users/post/:id', validateProjectId, addPostValidator, updatePost);
router.delete('/users/post/:id', validateProjectId, deletePost);
router.get('/users/post', getAllPosts);
router.get('/users/post/:id', getThePostById);
router.delete('/users');



module.exports = router;
