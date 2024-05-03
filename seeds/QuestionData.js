const { Question } = require("../models");

const QuestionData = [
    {

    },
]

const seedQuestion = () => Question.bulkCreate(QuestionData);
module.exports = 