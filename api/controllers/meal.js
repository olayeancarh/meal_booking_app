import model from '../models';

const { Meal } = model;

class Meals {
  static addAMeal(req, res) {
    const {
      name, image, price, userId,
    } = req.body;
    return Meal.create({
      name, image, price, userId,
    })
      .then(mealData => res.status(201).send({ success: true, message: 'Meal successfully created', mealData }));
  }

  static fetchAllMeals(req, res) {
    return Meal.findAll()
      .then(meals => res.status(200).send(meals));
  }

  static updateAMeal(req, res) {
    const {
      name, image, price, userId,
    } = req.body;
    return Meal.findByPk(req.params.mealId)
      .then((meal) => {
        meal.update({
          name: name || meal.name,
          image: image || meal.image,
          price: price || meal.price,
          userId: userId || meal.userId,
        })
          .then((updatedMeal) => {
            res.status(200).send({
              message: 'Meal updated successfuly',
              data: {
                name: name || updatedMeal.name,
                image: image || updatedMeal.image,
                price: price || updatedMeal.price,
                userId: userId || updatedMeal.userId,
              },
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteAMeal(req, res) {
    Meal.findById(req.params.mealId)
      .then((meal) => {
        if (!meal) {
          return res.status(400).send({ message: 'Meal does not exist' });
        }
        return meal.destroy()
          .then(() => res.status(200).send({
            message: 'Meal successfully deleted',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}

export default Meals;
