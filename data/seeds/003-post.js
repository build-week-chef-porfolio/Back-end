exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('post').insert([
        {
          imgURL:
            'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          title: 'Caramel Cake',
          yield: '5 servings',
          serving: '2',
          total_time: '50 min',
          prep_time: '15 min',
          cook_time: '40 min',
          oven_temperature: '150 Celsius',
          description:
            'This real deal caramel cake recipe is the best southern classic recipe from scratch you will find. You wont find one better than this!',
          meal_type: 'Appetizer',
          ingredient: 'caramel',
          directions:
            'Heat the oven to 180C-160C fan 4. Butter two 20cm springform tins and line the bases with baking parchment, Add the remaining flour and milk. Divide between the cake tins and bake for 25-30 mins until they’re golden, spring back when pressed, and a skewer comes out clean when inserted into the middle. Drizzle with the 3 tbsp extra sauce (warm briefly in the microwave if it’s a little stiff ), allowing some to drip down the sides if you like, and scatter over the toffee, chocolate or caramel pieces to serve. Edible glitter, birthday candles or sparklers, optional',
          chef_id: 1,
          ingredient_id: 1,
        },

        {
          imgURL:
            'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Fruit Pie',
          yield: '5 servings',
          serving: '2',
          total_time: '30 min',
          prep_time: '10 min',
          cook_time: '15 min',
          oven_temperature: '180 Celsius',
          description:
            'This AMAZING fruit pie recipe is the fruitiest recipe you will find. Its the best!',
          meal_type: 'Snack',
          ingredient: 'fruit',
          directions:
            'In a large bowl, combine the sugar, cornstarch, tapioca and fruit, let stand for 15 minutes. In another bowl, combine flour and salt, cut in shortening until mixture resembles coarse crumbs. Combine the egg, water and vinegar, stir into flour mixture just until moistened. Divide dough in half so that one portion is slightly larger than the other. On a lightly floured surface, roll out larger portion to fit a 9-in. pie plate. Transfer pastry to pie plate; trim pastry to 1/2 in. beyond edge of plate. Spoon fruit mixture into crust. Roll out remaining pastry to fit top of pie; make a lattice crust. Trim, seal and flute edges. Brush with cream; sprinkle with coarse sugar. Bake at 375° for 45-55 minutes or until crust is golden brown and filling is bubbly. Cool completely on a wire rack.',
          chef_id: 2,
          ingredient_id: 2,
        },
        {
          imgURL:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
          title: 'Veggie Bowl',
          yield: '4 servings',
          serving: '3',
          total_time: '15 min',
          prep_time: '10 min',
          description:
            'Super healthy, super fun, and delicious on top of that! Take care of your body and your cravings with this delicious salad',
          meal_type: 'Dinner',
          ingredient: 'vegetable',
          directions:
            'Preheat oven to 204 C and line two baking sheets with parchment paper or more baking sheets if increasing batch size.To one baking sheet, add the potatoes, sweet potatoes, carrots, beets, and radishes and drizzle with half of the oil (or water), curry powder, and sea salt (as original recipe is written- 1 Tbsp (15 ml) oil (or water), 1/2 tsp curry powder, and 1/4 tsp sea salt). Toss to combine. Bake for a total of 20-25 minutes or until golden brown and tender.To the second baking sheet, add the cabbage, bell pepper, and broccolini. Drizzle with with the remaining half of the oil (or water), curry powder, and sea salt (as original recipe is written- 1 Tbsp (15 ml) oil (or water), 1/2 tsp curry powder, and 1/4 tsp sea salt). Toss to combine. When the potatoes/carrots hit the 10-minute mark, add the second pan to the oven and bake for a total of 15-20 minutes.',
          chef_id: 4,
          ingredient_id: 2,
        },
        {
          imgURL:
            'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80',
          title: 'Sunny-Side Up Egg',
          yield: '2 servings',
          serving: '3',
          total_time: '15 min',
          prep_time: '8 min',
          description:
            'Sunny-Side Up Eggs make a beautiful, classic addition to any breakfast. I make the perfect sunny-side up egg every time.',
          meal_type: 'Breakfast',
          ingredient: 'eggs',
          directions:
            'Heat butter in nonstick skillet over medium-high heat until hot. Use 1 to 2 teaspoons of butter per egg. Or, spray pan with cooking spray. Break eggs, 1 at a time, into skillet, leaving spaces between eggs. Reduce heat to low. Cook 4 to 5 min. or until whites are set and yolks are cooked to desired doneness.To speed up cooking process, cover skillet while cooking eggs. However, eggs will not look as "sunny" yellow if you cover the eggs because the steam trapped under the lid partially poaches the egg yolk.',
          chef_id: 5,
          ingredient_id: 2,
        },
        {
          imgURL:
            'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          title: 'Creamy Fish Dinner with Greens',
          yield: '3 servings',
          serving: '4',
          total_time: '30 min',
          prep_time: '15 min',
          description:
            'A simple New England classic that highlights the flaky tenderness and light taste of the cod or any white fish.',
          meal_type: 'Lunch',
          ingredient: 'fish',
          directions:
            'Melt butter in a large heavy-based ovenproof frying pan over medium heat. Add leek and garlic. Cook, stirring, for 2-3 mins or until softened. Add flour. Cook, stirring, for 1 min or until mixture is grainy. Stir in mustard. Gradually stir in the cream and stock.Bring to the boil. Reduce heat to low. Cook for 2 mins. Add fish and cook for 2-3 mins or until fish is cooked through. Add the frozen vegetables. Season. Simmer for 1-2 mins or until vegetables are heated through.Preheat grill on medium. Combine the breadcrumbs, haloumi and cheddar in a small bowl. Sprinkle over the fish mixture. Spray with olive oil spray. Cook under the grill for 5-10 mins or until top is crisp and golden.',
          chef_id: 3,
          ingredient_id: 4,
        },
      ]);
    });
};
