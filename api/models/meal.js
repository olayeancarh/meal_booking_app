module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter meal name',
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter meal price',
      },
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter a userId',
      },
    },
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
  };
  return Meal;
};
