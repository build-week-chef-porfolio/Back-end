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

async function loginUser(req, res, next) {
  const { username, password } = req.body;
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
}

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

// router.post('/register', async (req, res) => {
//   const user = await User.registerUser(req.body);
//   return res.status(201).json({ user, message: 'User created successfully' });
// });

module.exports = {
  createNewUser,
  loginUser,
  createNewPost,
};
