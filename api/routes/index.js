const router = require('express').Router()
const userRouter = require("./user.router");
const authRouter = require("./auth.router");

router.use('/movie', require('./movie'))
router.use('/country', require('./country'))
router.use('/address', require('./address'))
router.use('/actor', require('./actor'))
router.use("/users", userRouter);
router.use("/auth", authRouter);

module.exports = router


