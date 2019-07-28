const User = require('../data/models/user');
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



module.exports = {
  addUserValidator,
}
