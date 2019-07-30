exports.up = function(knex) {
  return knex.schema.createTable('chef', chef => {
    chef.increments();
    chef.string('first_name', 128).notNullable();
    chef
      .string('last_name', 128)
      .notNullable();
    chef.string('chef_type', 128).notNullable();
    chef.string('city', 128).notNullable();
    chef.integer('zip_code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chef');
};
