'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    walletId: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};
