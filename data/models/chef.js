const db = require('../dbConfig');
const { ErrorHandler } = require('../../helpers');

const getChefs = () => {
  try {
    const chefs = db('chef');
    return chefs;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

module.exports = {
  getChefs,
};
