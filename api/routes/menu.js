import Menus from '../controllers/menu';
import middleware from '../middleware';

module.exports = (app) => {
  // Api route to create a new menu
  app.post('/api/v1/menus', middleware.checkToken, Menus.addAMenu);
  // Api route to get all menus in the system
  app.get('/api/v1/menus', middleware.checkToken, Menus.fetchAllMenus);
};
