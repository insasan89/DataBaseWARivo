const router = require('express').Router()
const { sequelize } = require('../../database/index');
//const { Conflict, Location, OrganizationA, OrganizationB, Dyad } = require('../models/')
const userRouter = require("./user.router");
const authRouter = require("./auth.router");

router.use('/organization_a', require('./organization_a'))
router.use('/organization_b', require('./organization_b'))
router.use('/conflict', require('./conflict'))
router.use('/location', require('./location'))
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use('/ucdp', require("./utils.router"))


module.exports = router;