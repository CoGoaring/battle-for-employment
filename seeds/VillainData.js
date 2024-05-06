const { Villain } = require("../models");

const VillainData = [
    {
        villain_name: "CodePoring",
        villain_description: "CodePoring is a variant of the classic Poring, roams digital landscapes with a translucent, pink-hued body. It boasts an invincible defense, impervious to attacks except from correct HTML answers. Friendly and playful, it challenges learners with HTML questions, weakening only upon accurate responses. Serving as an educational guardian, it motivates learners to engage with HTML concepts through interactive challenges."
    },
    {
        villain_name: "Codekowski",
        villain_description: "CodekowskiCodekowski is a spirited monster akin to Mike Wazowski, is a passionate coding enthusiast with lime-green skin and a single large eye. His enthusiasm for coding shines through, but he's uniquely challenged by JavaScript, often seeking assistance to overcome its complexities. Found in bustling coding hubs, he collaborates with peers, embodying the spirit of learning and growth in the coding community.",
    },
    {
        villain_name: "Codewithcorgis",
        villain_description: "After witnessing his creator, Andrew Hoang, using ChatGPT in his codes, CodeWithCorgi saw his entire life as a lie. With all the hatred accumulated from this trauma, he turned against all programmers, vowing to eradicate those who collude with his creator. Fuelled by a sense of betrayal, CodeWithCorgi now prowls the digital realm, his once friendly demeanor replaced by a vengeful glare, seeking retribution against those who dare to trust in the technology that shattered his reality."
    }
]

const seedVillain = () => Villain.bulkCreate(VillainData);

module.exports = seedVillain;