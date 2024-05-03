const seedVillain = require("./VillainData");
const seedUser = require("./UserData");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedVillain(); 
    console.log('\n----- seedVillain SEEDED -----\n');

    await seedUser();
    console.log('\n----- seedUser SEEDED -----\n');

    process.exit(0);
};

seedAll();