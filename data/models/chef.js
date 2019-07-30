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

const getChefById = async id => {
  try {
    const chef = await db('chef')
      .where({ id })
      .first();
    return chef;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

module.exports = {
  getChefs,
  getChefById,
};
