const router = require('express').Router()

const { getAllOrgA, getOneOrgA, createOrgA, updateOrgA, deleteOrgA, getOrganizationAConflictsLazy, getOrganizationAConflictsEager } = require('../controllers/organization_a')

router.get('/', getAllOrgA)
router.get('/:id/conflicts/eager', getOrganizationAConflictsEager)
router.get('/:id/conflicts/lazy', getOrganizationAConflictsLazy)
router.get('/:id', getOneOrgA)
router.post('/', createOrgA)
router.put('/:id', updateOrgA)
router.delete('/:id', deleteOrgA)


module.exports = router
