const router = require("express").Router();
const { Question, User, Villain} = require ("../models");
const withAuth = require("../utils/auth");
router.get("/", withAuth, async (req, res) => {
    try{
        const villainData = await Villain.findAll ({
            attributes:["villain_name"]
        });
        const villains = villainData.map((villain) => {
            villain.get({ plain: true })
        });
        res.render("homepage", {
            villains,
            logged_in: req.session.logged_in,
        });
    }catch(error){
        res.status(500).json(error);
    }
});
router.get("/villain/:id", withAuth, async (req, res) => {
    try{
        const villainData = await Villain.findByPk(req.params.id, {
            include:[
                {
                model: Question,
                attributes: [
                    "question",
                    "type",
                    "difficult",
                ],
            },
        ],
});
    if(!villainData){
        res.status(404).json({
            message: "No villain found in the system!!"
        });
         return;
    }
    const villain = villainData.get({ plain: true });
    res.render("villain",
    {
        ...villain,
        logged_in: req.session.logged_in
    });
    }catch(error){
        res.status(500).json(error);
    }
});
router.get("/login", (req, res) => {
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }
    res.render("login");
})
module.exports = router;