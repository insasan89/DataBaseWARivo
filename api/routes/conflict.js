const router = require('express').Router()

const { getAllConflicts, getOneConflict, createConflict, updateConflict, deleteConflict } = require('../controllers/conflict')

router.get('/', getAllConflicts)
router.get('/:id', getOneConflict)
router.post('/', createConflict)
router.put('/:id', updateConflict)
router.delete('/:id', deleteConflict)

//router.put('/:movieId/actor/:actorId', addActorToMovie)


module.exports = router