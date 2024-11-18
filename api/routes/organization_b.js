const router = require('express').Router()

const { getAllOrgB, getOneOrgB, createOrgB, updateOrgB, deleteOrgB, getOrganizationBConflictsEager, getOrganizationBConflictsLazy } = require('../controllers/organization_b')

router.get('/', getAllOrgB)
router.get('/:id/conflicts/eager', getOrganizationBConflictsEager)
router.get('/:id/conflicts/lazy', getOrganizationBConflictsLazy)
router.get('/:id', getOneOrgB)
router.post('/', createOrgB)
router.put('/:id', updateOrgB)
router.delete('/:id', deleteOrgB)

module.exports = router
