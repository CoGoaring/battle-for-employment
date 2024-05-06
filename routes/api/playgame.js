const router = require("express").Router();

const { Question, User, Villain } = require ("../../models");

const withAuth = require("../../utils/auth");

router.get("/playgame/:id", withAuth, async (req, res) => {
    try{
        const gameData = await Villain.findByPk(req.params.id,{
            include: [
                {
                    model: Question,
                },
            ],
        });
        res.status(200).json(gameData);
    }catch(error){
        res.status(500).json(error);
    };
});

module.exports = router;