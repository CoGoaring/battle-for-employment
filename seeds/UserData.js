const { User } = require("../models");

const UserData = [
    {
        username: "Erikgontijo",
        password: "1234567889",
    },
    {
        username: "Kwangordon",
        password: "1234567889",
    },
    {
        username: "Connorgoaring",
        password: "1234567889",
    },
    {
        username: "Urrutiajoshua",
        password: "1234567889",
    },
]

const seedUser = () => User.bulkCreate(UserData,  {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;