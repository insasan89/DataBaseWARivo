const router = require('express').Router()

const { getAllAddresses, getOneAddress, createAddress, updateAddress, deleteAddress } = require('../controllers/address')

router.get('/', getAllAddresses)
router.get('/:id', getOneAddress)
router.post('/', createAddress)
router.put('/:id', updateAddress)
router.delete('/:id', deleteAddress)

module.exports = router
