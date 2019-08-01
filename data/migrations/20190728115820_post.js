exports.up = function(knex) {
  return knex.schema
    .createTable('post', post => {
      post.increments();
      post.string('imgURL', 255);
      post.string('title', 255).notNullable();
      post.string('yield', 255);
      post.string('serving', 255);
      post.string('total_time', 128);
      post.string('prep_time', 128);
      post.string('cook_time', 128);
      post.string('oven_temperature', 255);
      post.string('description', 255).notNullable();
      post.string('meal_type', 128).notNullable();
      post.string('ingredient', 255).notNullable();
      post.text('directions').notNullable();
      post.string('chef', 128);
      post
        .integer('chef_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('chef')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      post
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

    .createTable('ingredient', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('unit', 128);
      tbl.string('quantity', 128);
      tbl.string('serving', 128);
      tbl.string('yield', 128);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post').dropTableIfExists('ingredient');
};
