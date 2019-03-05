module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    createdBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      },
    },
    deliveryPoint: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a delivery point',
      },
    },
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
  };
  return Order;
};
