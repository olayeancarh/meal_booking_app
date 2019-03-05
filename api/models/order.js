module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order', {
      userId: {
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
    },
  );
  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Order;
};
