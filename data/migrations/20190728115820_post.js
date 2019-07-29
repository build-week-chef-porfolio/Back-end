exports.up = function(knex) {
  return knex.schema.createTable('post', post => {
    post.increments();

    post.string('title', 128).notNullable();
    post.string('imgURL', 255);
    post.string('meal_type', 128).notNullable();
    post.string('yield', 255);
    post.string('serving', 255);
    post.string('time', 255);
    post.string('description', 255).notNullable();
    post.string('ingredients', 255).notNullable();
    post.string('directions', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
