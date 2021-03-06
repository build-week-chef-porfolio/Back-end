exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chef')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('chef').insert([
        {
          first_name: 'Gordon',
          last_name: 'Ramsay',
          chef_type: 'Executive Chef',
          city: 'London',
          zip_code: 79555,
        },
        {
          first_name: 'Jamie',
          last_name: 'Oliver',
          chef_type: 'Station Chef',
          city: 'Boston',
          zip_code: 28487,
        },
        {
          first_name: 'Rachael',
          last_name: 'Ray',
          chef_type: 'Executive Chef',
          city: 'Copenhagen',
          zip_code: 27768,
        },
        {
          first_name: 'Wolfgang',
          last_name: 'Puck',
          chef_type: 'Sous Chef',
          city: 'Los Angeles',
          zip_code: 45877,
        },
        {
          first_name: 'Mario',
          last_name: 'Batali',
          chef_type: 'Station Chef',
          city: 'Milano',
          zip_code: 87487,
        },

        {
          first_name: 'Bobby',
          last_name: 'Flay',
          chef_type: 'Executive Chef',
          city: 'New York',
          zip_code: 11687,
        },
        {
          first_name: 'Paula',
          last_name: 'Deen',
          chef_type: 'Sous Chef',
          city: 'Chicago',
          zip_code: 8487,
        },
        {
          first_name: 'Ferran',
          last_name: 'Adria',
          chef_type: 'Station Chef',
          city: 'Madrid',
          zip_code: 34345,
        },
        {
          first_name: 'Ferran',
          last_name: 'Adria',
          chef_type: 'Station Chef',
          city: 'Madrid',
          zip_code: 34345,
        },
        {
          first_name: 'Paul',
          last_name: 'Bocuse',
          chef_type: 'Sous Chef',
          city: 'Paris',
          zip_code: 89345,
        },
        {
          first_name: 'Charlie Trotter',
          last_name: 'Adria',
          chef_type: 'Executive Chef',
          city: 'Las Vegas',
          zip_code: 56464,
        },
        {
          first_name: 'Emeril',
          last_name: 'Lagasse',
          chef_type: 'Executive Chef',
          city: 'Los Angeles',
          zip_code: 25788,
        },
        {
          first_name: 'Sanjeev',
          last_name: 'Kapoor',
          chef_type: 'Station Chef',
          city: 'Moscow',
          zip_code: 56565,
        },
      ]);
    });
};
