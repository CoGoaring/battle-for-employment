const router = require("express").Router();

const { User } = require("../../models");

router.post("/", async (req, res) => {
    try{
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            }
        });
        if(userData) {
            res.status(400).json({
                message: "Username already in the system!!"
            });
            return;
        }
        const newUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUserData.id,
            req.session.loggedId = true;

            res.status(200).json(newUserData);
        });
    }catch(error){
        res.status(500).json(error);
    }
});

router.post("/login", async (req , res) => {
    try{
        const userData = await User.findOne({
            where:{
                username: req.body.username,
            },
        });
        if(!userData){
            res.status(400).json({
                message: "Incorrect username or not in the system!!"
            });
            return;
        };
        const validPassword = await userDaata.checkPassword(req.body.password);

        if(!validPassword){
            res.status(400).json({
                message: "Inccorect password."
            });
            return;
        };

        req.session.save(() => {
            req.session.user_id = userData.id,
            req.session.loggedIn = true;

            res.status(200).json({ user: userData, message: "You are now logged in!!"});
        });
    }catch(error){
        res.status(500).json(error);
    }
});

router.post("/logout", (req,res) => {
if(req.session.loggedId){
    req.session.destroy(() => {
        res.status(204).end();
    });
}else {
    res.status(404).end();
}
});

module.exports = router;