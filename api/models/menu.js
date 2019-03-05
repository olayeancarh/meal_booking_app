module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter a userId',
      },
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter meal id',
      },
    },
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
  };
  return Menu;
};
