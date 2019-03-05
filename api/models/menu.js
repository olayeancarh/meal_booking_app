module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    'Menu', {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        },
      },
      mealId: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: 'Please enter meal id',
        },
        references: {
          model: 'Meal',
          key: 'id',
          as: 'mealId',
        },
      },
    },
  );
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Menu.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
    });
  };
  return Menu;
};
