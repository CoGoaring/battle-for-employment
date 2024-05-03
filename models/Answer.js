const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init({
    id: {
       type:DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true, 
    },
    answer_text: {
        type:DataTypes.TEXT,
        allowNull:false,
    },
    question_id: {
        type:DataTypes.INTEGER,
        references: {
            model: "question",
            key: "id"
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'answer',
})

module.exports = Answer;