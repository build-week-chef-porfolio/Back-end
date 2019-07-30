exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredient').insert([
        {
          name: 'Caramel', post_id: 1, unit: 'one cup', quantity: '2', serving: '3', yield: '5',
        },
        {
          name: 'Banana', post_id: 2, unit: '10 slices', quantity: '3', serving: '2', yield: '3',
        },
      ]);
    });
};
