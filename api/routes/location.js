const router = require('express').Router()

const { getAllLocations, getOneLocation, createLocation, updateLocation, deleteLocation } = require('../controllers/location')

router.get('/', getAllLocations)
router.get('/:id', getOneLocation)
router.post('/', createLocation)
router.put('/:id', updateLocation)
router.delete('/:id', deleteLocation)

module.exports = router