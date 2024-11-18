const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/movie', require('./movie'))
router.use('/country', require('./country'))
router.use('/address', require('./address'))
router.use('/actor', require('./actor'))

module.exports = router