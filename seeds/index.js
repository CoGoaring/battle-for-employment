const seedVillain = require("./VillainData");
const seedUser = require("./UserData");
const seedQuestion = require("./QuestionData");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedVillain(); 
    console.log('\n----- VILLAIN SEEDED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedQuestion();
    console.log('\n----- QUESTION SEEDED -----\n');

    await seedAnswer();
    console.log('\n----- ANSWER SEEDED -----\n');

    process.exit(0);
};

seedAll();