const Question = require("./Question");
const Answer = require("./Answer");
const Villain = require("./Villain");

Villain.hasMany(Question, {
    foreignKey: "villain_id"
});

Question.belongsTo(Villain, {
    foreignKey: "villain_id"
});

Question.hasOne(Answer, {
    foreignKey: "question_id"
});

Answer.belongsTo(Question, {
    foreignKey: "question_id"
});


module.exports = {
    Question,
    Answer,
    Villain,
  };