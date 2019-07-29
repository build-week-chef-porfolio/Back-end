const User = require('../data/models/user');
const Project = require('../data/models/post');
const { ErrorHandler } = require('../helpers/');



const addUserValidator = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw new ErrorHandler(400, 'missing the user information');
    } else {
      const { username, password, email } = req.body;
      if (!username || !password || !email) {
        throw new ErrorHandler(400, 'all fields need to be filled');
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

const addPostValidator = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw new ErrorHandler(400, 'missing the post information');
    } else {
      const {
        title, meal_type, description, ingredients, directions,
      } = req.body;
      if (!title || !meal_type || !description || !ingredients || !directions) {
        throw new ErrorHandler(
          400,
          'missing the post required field, please fill all the required fields',
        );
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

async function validatePostId(req, res, next) {
  try {
    const { id } = req.params;
    if (!id || !Number(id)) {
      throw new ErrorHandler(400, 'invalid post id');
    } else {
      const post = await Project.getPostById(id);
      if (post) {
        req.post = post;
        next();
      } else {
        throw new ErrorHandler(404, 'Post with the specified ID does not exist');
      }
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addUserValidator,
  addPostValidator,
  validatePostId,
};
