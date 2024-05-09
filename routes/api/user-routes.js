const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.username = userData.username;
            req.session.logged_in = true;
            req.session.user_id=userData.id
  
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json({ error: "Failed to create user." });
    }
});
router.post("/login", async (req , res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        console.log(userData)
        if (!userData) {
            return res.status(400).json({ error: "User not found." });
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Incorrect password." });
        }
        req.session.save(() => {
            req.session.username = userData.username;
            req.session.logged_in = true;
            req.session.user_id=userData.id
            res.json({
                user: userData,
                message: "You are now logged in!!",
            });
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
});
router.post("/logout", (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).json({ error: "No session found." });
    }
});


router.put("/",async(req,res)=>{
    try {
       const user=await User.update(req.body,{where:{id:req.session.user_id}}) 
       res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });  
    }
})
module.exports = router;