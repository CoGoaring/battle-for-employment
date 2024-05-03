const { Answer } = require("../models");

const AnswerData = [
    {

    },
]

const seedAnswer = () => Answer.bulkCreate(AnswerData);
module.exports = seedAnswer;