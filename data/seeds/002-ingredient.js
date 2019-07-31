exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredient').insert([
        {
          name: 'sugar',
          unit: 'tablespoon',
          quantity: '10',
          serving: '5',
          yield: '2',
        },
        {
          name: 'meat',
          unit: 'slice',
          quantity: '4',
          serving: '5',
          yield: '3',
        },
        {
          name: 'vegetable',
          unit: 'bowl',
          quantity: '3',
          serving: '2',
          yield: '3',
        },
        {
          name: 'dairy',
        },
        {
          name: 'fish',
          unit: 'slice',
          quantity: '4',
          serving: '2',
          yield: '4',
        },
        {
          name: 'eggs',
          unit: 'egg',
          quantity: '4',
          serving: '2',
          yield: '3',
        },
      ]);
    });
};
