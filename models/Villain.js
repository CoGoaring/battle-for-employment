const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Villain extends Model {}

Villain.init({
    id: {
       type:DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true, 
    },
    villain_name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    villain_description: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'villain',
})

module.exports = Villain;