const express = require('express');
const { createNewUser, createNewPost } = require('../controllers');
const { loginUser } = require('../controllers');
const { authenticate } = require('../auth/authenticate');

const { addUserValidator } = require('../middleware');

const router = express.Router();

router.post('/users/register', addUserValidator, createNewUser);
router.post('/users/login', addUserValidator, loginUser);
router.post('/users/post', createNewPost);
router.get('/users');
router.delete('/users');

module.exports = router;
