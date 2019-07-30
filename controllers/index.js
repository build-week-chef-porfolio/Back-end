const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { ErrorHandler } = require('../helpers');
const User = require('../data/models/user');
const Post = require('../data/models/post');
const Chef = require('../data/models/chef');

const { generateToken } = require('../auth/authenticate');

const createNewUser = async (req, res, next) => {
  try {
    const user = await User.registerUser(req.body);
    if (user) {
      return res.status(201).json({
        message: 'User created successfully',
        user,
      });
    }
    throw new ErrorHandler(500, 'Error occurred trying to create user');
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      throw new ErrorHandler(400, 'username or password are required');
    }
    const user = await User.findBy({ username });
    const passwordMatched = user && bcrypt.compareSync(password, user.password);
    if (!passwordMatched) {
      throw new ErrorHandler(401, 'Invalid credentials');
    }
    const token = generateToken(user);
    return res.status(200).json({
      message: `Welcome ${username}`,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.getPosts();
    if (!posts) {
      throw new ErrorHandler(404, 'No posts found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      posts,
    });
  } catch (error) {
    next(error);
  }
};

const getAllChefs = async (req, res, next) => {
  try {
    const chefs = await Chef.getChefs();
    if (!chefs) {
      throw new ErrorHandler(404, 'No chefs found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      chefs,
    });
  } catch (error) {
    next(error);
  }
};

const getThePostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Post.getPostById(id);
    if (!post) {
      throw new ErrorHandler(404, 'No post with that ID is found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      post,
    });
  } catch (error) {
    next(error);
  }
};

const getTheChefById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const chef = await Chef.getChefById(id);
    if (!chef) {
      throw new ErrorHandler(404, 'No Chef with that ID is found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      chef,
    });
  } catch (error) {
    next(error);
  }
};

const getTheChefByCity = async (req, res, next) => {
  const { city } = req.params;

  try {
    const chefs = await Chef.getChefByCity(city);
    if (!chefs) {
      throw new ErrorHandler(404, 'No Chef in that city is found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      chefs,
    });
  } catch (error) {
    next(error);
  }
};

const createNewPost = async (req, res, next) => {
  try {
    const post = await Post.addPost(req.body);
    if (post) {
      return res.status(201).json({
        message: 'Post created successfully',
        post,
      });
    }
    throw new ErrorHandler(500, 'Error occurred trying to save post');
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.updatePost(req.params.id, req.body);
    if (post) {
      return res.status(200).json({ message: 'Post updated', post });
    }
    throw new ErrorHandler(500, 'Could not update the project');
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (deleted) {
      return res.status(200).json({ message: 'Post has been deleted' });
    }
    throw new ErrorHandler(500, 'Could not delete the post');
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const getTheIngredientById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const ingredient = await Post.getIngredientById(id);
    if (!ingredient) {
      throw new ErrorHandler(404, 'No ingredient is found in database');
    }
    return res.status(200).json({
      message: 'Ok',
      ingredient,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewUser,
  loginUser,
  createNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getThePostById,
  getAllChefs,
  getTheChefById,
  getTheChefByCity,
  getTheIngredientById,

};
