const db = require('../dbConfig');
const { ErrorHandler } = require('../../helpers');

const getPostById = async id => {
  try {
    const post = await db('post')
      .where({ id })
      .first();
    return post;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

// async function getPostById(postData) {
//   const [key] = Object.keys(postData);
//   const [value] = Object.values(postData);

//   return db('post')
//   .select('post.Title as postT', 'post.Description as postD', 'post.Ingredients as postI', 'post.Description');
// }

// const getPostById = async (req, res) => {
//   try {
//     if (!req.post) {
//       throw new ErrorHandler(500, 'Post with the specified ID does not exist');
//     }
//     return res.status(200).json({ message: 'OK', post: req.post });
//   } catch (error) {
//     console.log(error);
//   }
// };

const getPosts = () => {
  try {
    const posts = db('post');
    return posts;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const addPost = async post => {
  try {
    const newPost = await db('post').insert(post);
    if (!newPost) {
      return null;
    }
    return await getPostById(newPost[0]);
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const updatePost = async (id, post) => {
  try {
    const updated = await db('post')
      .update(post)
      .where({ id });
    if (updated) {
      return await getPostById(id);
    }
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const deletePost = async id => {
  try {
    const deleted = await db('post')
      .where({ id })
      .del();
    return deleted;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const getIngredientById = async id => {
  try {
    const ingredient = await db('ingredient')
      .where({ id })
      .first();
    const posts = await db('post').where({ ingredient_id: ingredient.id });
    const response = { ...ingredient, posts };
    return response;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

module.exports = {
  getPosts,
  addPost,
  getPostById,
  updatePost,
  deletePost,
  getIngredientById,
};
