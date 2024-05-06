const router = require("express").Router();

const { Question, User, Villain } = require ("../../models");

const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
    try{
        const gameData = await Villain.findByPk(req.params.id,{
            include: [
                {
                    model: Question,
                },
            ],
        });
        if(!gameData){
            res.status(404).json({
                message: "No villain find for the id!!"
            });
            return;
        }
        const villain = gameData.get({ plain: true});

        res.status(200).json(villain);
    }catch(error){
        res.status(500).json(error);
    };
});

module.exports = router;