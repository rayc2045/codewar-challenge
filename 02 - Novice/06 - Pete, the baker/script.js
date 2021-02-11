/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes(
  {flour: 500, sugar: 200, eggs: 1},
  {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
);

// must return 0
cakes(
  {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
  {sugar: 500, flour: 2000, milk: 2000}
);
*/

function cakes(recipe, available) {
  const ingredients = JSON.parse(JSON.stringify(available));
  const recipeKeys = Object.keys(recipe);
  let isContinue = true;
  let times = 0;

  while (isContinue) {
    let counts = 0;

    for (const i in recipeKeys) {
      if (
        ingredients.hasOwnProperty(recipeKeys[i]) &&
        ingredients[recipeKeys[i]] - recipe[recipeKeys[i]] >= 0
      )
        counts += 1;
    }

    if (counts === recipeKeys.length) {
      counts = 0;
      times += 1;
      for (const i in recipeKeys) ingredients[recipeKeys[i]] -= recipe[recipeKeys[i]];
    } else {
      isContinue = false;
    }
  }
  return times;
}

// Alternates

function cakes(recipe, available) {
  var result = [];
  for (var prop in recipe) {
    var availableProp = available[prop] || 0;
    var recipeProp = recipe[prop] || 0;
    if (recipeProp > 0) result.push(Math.floor(availableProp / recipeProp));
  }
  return Math.min.apply(Math, result);
}

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((val, ingredient) => {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val);
  }, Infinity);
}

function cakes(needs, has) {
  return Math.min(...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)));
}