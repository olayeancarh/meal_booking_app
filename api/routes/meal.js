import Meals from '../controllers/meal';

module.exports = (app) => {
  // Api route to create a new meal
  app.post('/api/v1/meals', Meals.addAMeal);
  // Api route to get all meals in the system
  app.get('/api/v1/meals', Meals.fetchAllMeals);
  // Api route to edit a meal
  app.put('/api/v1/meals/:mealId', Meals.updateAMeal);
  // Api route to delete a meal
  app.delete('/api/v1/meals/delete/:mealId', Meals.deleteAMeal);
};
