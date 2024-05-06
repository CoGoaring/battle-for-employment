const router = require('express').Router();

const userRoutes = require('./user-routes');

const playgame = require("./playgame");

router.use('/users', userRoutes);
router.use("/playgame", playgame);

module.exports = router;
