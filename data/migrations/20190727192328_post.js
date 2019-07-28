exports.up = function(knex) {
  return knex.schema.createTable('post', post => {
    post.increments();

    post.string('Title', 128).notNullable();
    post.string('imgURL', 255);
    post.string('Meal Type', 128).notNullable();
    post.string('Yield', 255);
    post.string('Serving', 255);
    post.string('Time', 255);
    post.string('Description', 255).notNullable();
    post.string('Ingredients', 255).notNullable();
    post.string('Directions', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
