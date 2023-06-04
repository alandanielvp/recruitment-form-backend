"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpAcademicInfo = void 0;
const sequelize_1 = require("sequelize");
class AcademicInfo extends sequelize_1.Model {
}
const setUpAcademicInfo = (sequelize) => {
    AcademicInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        software_devel_comments: sequelize_1.DataTypes.STRING,
        degree_level: sequelize_1.DataTypes.STRING,
        informal_education: sequelize_1.DataTypes.STRING,
        other_education: sequelize_1.DataTypes.STRING,
    }, { sequelize, modelName: "AcademicInfo" });
};
exports.setUpAcademicInfo = setUpAcademicInfo;
exports.default = AcademicInfo;
