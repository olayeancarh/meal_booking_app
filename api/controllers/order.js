import model from '../models';

const { Order } = model;

class Orders {
  static addAOrder(req, res) {
    const {
      name, image, price, userId,
    } = req.body;
    return Order.create({
      name, image, price, userId,
    })
      .then(orderData => res.status(201).send({ success: true, message: 'Order successfully created', orderData }));
  }

  static fetchAllOrders(req, res) {
    return Order.findAll()
      .then(orders => res.status(200).send(orders));
  }

  static updateAOrder(req, res) {
    const {
      name, image, price, userId,
    } = req.body;
    return Order.findByPk(req.params.orderId)
      .then((order) => {
        order.update({
          name: name || order.name,
          image: image || order.image,
          price: price || order.price,
          userId: userId || order.userId,
        })
          .then((updatedOrder) => {
            res.status(200).send({
              message: 'Order updated successfuly',
              data: {
                name: name || updatedOrder.name,
                image: image || updatedOrder.image,
                price: price || updatedOrder.price,
                userId: userId || updatedOrder.userId,
              },
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteAOrder(req, res) {
    Order.findById(req.params.orderId)
      .then((order) => {
        if (!order) {
          return res.status(400).send({ message: 'Order does not exist' });
        }
        return order.destroy()
          .then(() => res.status(200).send({
            message: 'Order successfully deleted',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}

export default Orders;
