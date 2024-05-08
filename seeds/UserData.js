const { User } = require("../models");

const UserData = [
    {
        username: "Erikgontijo",
        password: "123456789",
    },
    {
        username: "Kwangordon",
        password: "123456789",
    },
    {
        username: "Connorgoaring",
        password: "123456789",
    },
    {
        username: "Urrutiajoshua",
        password: "123456789",
    },
]

const seedUser = () => User.bulkCreate(UserData,  {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;