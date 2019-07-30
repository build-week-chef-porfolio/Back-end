exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('post').insert([
        {
          imgURL: 'https://unsplash.com/photos/gHm50qaMaXc',
          title: 'Caramel Cake',
          yield: '5 servings',
          serving: '2',
          total_time: '50 min',
          prep_time: '15 min',
          cook_time: '40 min',
          oven_temperature: '150 Celsius',
          description:
            'This real deal caramel cake recipe is the best southern classic recipe from scratch you will find. You wont find one better than this!',
          meal_type: 'Dessert',
          ingredient: 'Caramel',
          directions:
            'Heat the oven to 180C-160C fan 4. Butter two 20cm springform tins and line the bases with baking parchment, Add the remaining flour and milk. Divide between the cake tins and bake for 25-30 mins until they’re golden, spring back when pressed, and a skewer comes out clean when inserted into the middle. Drizzle with the 3 tbsp extra sauce (warm briefly in the microwave if it’s a little stiff ), allowing some to drip down the sides if you like, and scatter over the toffee, chocolate or caramel pieces to serve. Edible glitter, birthday candles or sparklers, optional',
          chef_id: 1,
          ingredient_id: 1,
        },

        {
          imgURL: 'https://unsplash.com/photos/IGfIGP5ONV0',
          title: 'Fruit Pie',
          yield: '5 servings',
          serving: '2',
          total_time: '30 min',
          prep_time: '10 min',
          cook_time: '15 min',
          oven_temperature: '180 Celsius',
          description:
            'This AMAZING fruit pie recipe is the fruitiest recipe you will find. Its the best!',
          meal_type: 'Dessert',
          ingredient: 'Banana',
          directions:
            'In a large bowl, combine the sugar, cornstarch, tapioca and fruit, let stand for 15 minutes. In another bowl, combine flour and salt, cut in shortening until mixture resembles coarse crumbs. Combine the egg, water and vinegar, stir into flour mixture just until moistened. Divide dough in half so that one portion is slightly larger than the other. On a lightly floured surface, roll out larger portion to fit a 9-in. pie plate. Transfer pastry to pie plate; trim pastry to 1/2 in. beyond edge of plate. Spoon fruit mixture into crust. Roll out remaining pastry to fit top of pie; make a lattice crust. Trim, seal and flute edges. Brush with cream; sprinkle with coarse sugar. Bake at 375° for 45-55 minutes or until crust is golden brown and filling is bubbly. Cool completely on a wire rack.',
          chef_id: 2,
          ingredient_id: 2,
        },
      ]);
    });
};
