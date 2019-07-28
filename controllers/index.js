const bcrypt = require('bcryptjs');
const { ErrorHandler } = require('../helpers');
const User = require('../data/models/user');
const Post = require('../data/models/post');
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
}

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

// const getThePostById = async (req, res, next) => {
//    const {id} = req.params;

//    try {
//      const post = await Post.getPostById(id);
//      if(post) {
//        res.json(post);
//      } else {
//         res.status(404).json({ message: 'Could not find the post with given id'})
//      }

//    } catch (error){
//       res.status(500).json({ message: 'Failed to ge the post'}))
//    }

// }

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

// router.post('/register', async (req, res) => {
//   const user = await User.registerUser(req.body);
//   return res.status(201).json({ user, message: 'User created successfully' });
// });

module.exports = {
  createNewUser,
  loginUser,
  createNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getThePostById,
};
