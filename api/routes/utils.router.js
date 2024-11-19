const router = require("express").Router();

const injectionSQL = require("../utils/utils")

router.get("/injection", injectionSQL)


module.exports = router