import model from '../models';

const { Menu } = model;

class Menus {
  static addAMenu(req, res) {
    const {
      mealId, userId,
    } = req.body;
    return Menu.create({
      mealId, userId,
    })
      .then(menuData => res.status(201).send({ success: true, message: 'Menu successfully created', menuData }));
  }

  static fetchAllMenus(req, res) {
    return Menu.findAll()
      .then(menus => res.status(200).send(menus));
  }
}

export default Menus;
