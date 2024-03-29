"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class governmentinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  governmentinfo.init(
    {
      CURP: DataTypes.STRING,
      identification_number: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GovernmentInfo",
    }
  );
  return governmentinfo;
};
