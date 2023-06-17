'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  merchants.init({
    phoneNumber: {
      type:DataTypes.BIGINT,
      allowNull:false,
      primaryKey: true
    },
    purpose: {
      type: DataTypes.STRING

    }
  }, {
    sequelize,
    modelName: 'merchants',
  });
  return merchants;
};