module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter a userId',
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
