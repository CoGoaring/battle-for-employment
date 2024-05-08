const router = require("express").Router();
const { Question, User, Villain } = require ("../../models");
const withAuth = require("../../utils/auth");

// code moved to home routes 

// router.get("/", withAuth, async (req, res) => {
//     try{
//         const user = await User.findOne(req.session.username);
//         const progress = user.progress;
//         const gameData = await Villain.findByPk(progress,{
//             include: [
//                 {
//                     model: Question,
//                 },
//             ],
//         });
//         if(!gameData){
//             res.status(404).json({
//                 message: "No villain find for the id!!"
//             });
//             return;
//         }
//         const villain = gameData.get({ plain: true});
//         res.status(200).json(villain);
//     }catch(error){
//         res.status(500).json(error);
//     };
// });
module.exports = router;