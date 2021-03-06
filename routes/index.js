const express = require('express');
const { createNewUser, createNewPost, getAllPosts, updatePost,
  deletePost, getThePostById, getAllChefs, getTheChefById, getTheChefByCity, getTheIngredientById } = require('../controllers');

const { loginUser } = require('../controllers');
const { authenticate } = require('../auth/authenticate');

const { addUserValidator, addPostValidator, validatePostId } = require('../middleware');

const router = express.Router();

router.post('/users/register', addUserValidator, createNewUser);
router.post('/users/login', addUserValidator, loginUser);
router.post('/users/post', authenticate, addPostValidator, createNewPost);
router.put('/users/post/:id', authenticate, validatePostId, addPostValidator, updatePost);
router.delete('/users/post/:id', authenticate, validatePostId, deletePost);
router.get('/users/post', getAllPosts);
router.get('/users/chef', getAllChefs);
router.get('/users/chef/:id', getTheChefById);
router.get('/users/post/:id', getThePostById);
router.get('/users/:city/chef', getTheChefByCity);
router.get('/users/ingredient/:id', getTheIngredientById);
// router.post('/users/logout', logOut);

module.exports = router;
