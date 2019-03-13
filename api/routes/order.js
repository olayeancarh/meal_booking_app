import Orders from '../controllers/order';
import middleware from '../middleware';

module.exports = (app) => {
  // Api route to create a new order
  app.post('/api/v1/orders', middleware.checkToken, Orders.addAOrder);
  // Api route to get all orders in the system
  app.get('/api/v1/orders', middleware.checkToken, Orders.fetchAllOrders);
  // Api route to edit a order
  app.put('/api/v1/orders/:orderId', middleware.checkToken, Orders.updateAOrder);
  // Api route to delete a order
  app.delete('/api/v1/orders/delete/:orderId', middleware.checkToken, Orders.deleteAOrder);
};
