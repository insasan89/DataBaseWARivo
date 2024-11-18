const router = require('express').Router()

const { getAllDyads, getOneDyad, createDyad, updateDyad, deleteDyad } = require('../controllers/dyad')

router.get('/', getAllDyads)
router.get('/:id', getOneDyad)
router.post('/', createDyad)
router.put('/:id', updateDyad)
router.delete('/:id', deleteDyad)


module.exports = router