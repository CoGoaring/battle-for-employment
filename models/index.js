const Question = require("./Question");
const Villain = require("./Villain");
const User = require("./User");

Villain.hasMany(Question, {
    foreignKey: "villain_id"
});

Question.belongsTo(Villain, {
    foreignKey: "villain_id"
});

module.exports = {
    Question,
    Villain,
    User,
  };