module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    createdBy: {
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
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
  };
  return Menu;
};
