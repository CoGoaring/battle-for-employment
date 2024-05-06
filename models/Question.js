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
    question: {
        type:DataTypes.TEXT,
        allowNull:false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
    },
    choice1:{
        type: DataTypes.STRING,
    },
    choice2:{
        type: DataTypes.STRING,
    },
    choice3:{
        type: DataTypes.STRING,
    },
    choice4:{
        type: DataTypes.STRING,
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
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
}
)

module.exports = Question;