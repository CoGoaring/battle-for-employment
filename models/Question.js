const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Question extends Model {}

Question.init({
    id: {
       type:DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true, 
    },
    question_text: {
        type:DataTypes.TEXT,
        allowNull:false,
    },
    difficult: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        villain_id: {
        type:DataTypes.INTEGER,
        references: {
            model: "villain",
            key: "id"
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
})

module.exports = Question;