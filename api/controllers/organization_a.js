const OrgA = require('../models/organization_a')
const Conflict = require('../models/conflict')
const { Op } = require('sequelize')

async function getAllOrgA(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const organizationA = await OrgA.findAll()
            if (organizationA) {
                return res.status(200).json(organizationA)
            } else {
                return res.status(404).send('No organizations A found')
            }
        } else {
            const organizationA = await OrgA.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (organizationA.length !== 0) {
                return res.status(200).json(organizationA)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneOrgA(req, res) {
    try {
        const organizationA = await OrgA.findByPk(req.params.id)

        if (organizationA) {
            return res.status(200).json(organizationA)
        } else {
            return res.status(404).send('Organization A not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createOrgA(req, res) {
    try {
        const organizationA = await OrgA.create(req.body)
        return res.status(200).json({ message: 'Organization A created', organizationA: organizationA })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOrgA(req, res) {
    try {
        const [organizationAExist, organizationA] = await OrgA.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (organizationAExist !== 0) {
            return res.status(200).json({ message: 'Organization A updated', organizationA: organizationA })
        } else {
            return res.status(404).send('Organization A not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOrgA (req, res) {
    try {
        const organizationA = await OrgA.destroy({
            where: {
                id: req.params.id
            }
        })
        if (organizationA) {
            return res.status(200).json('Organization A deleted')
        } else {
            return res.status(404).send('Organization A not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOrganizationAConflictsLazy(req, res) {

    try {
        const organizationA = await OrgA.findByPk(req.params.id);
        const conflict = await OrgA.getConflict();
        if (!organizationA) {
            console.log(req.params)
            return res.status(404).send('Organization A not found', req.params);
        }
        return res.status(200).json(conflict);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


async function getOrganizationAConflictsEager(req, res) {
    try {
        const organizationA = await OrgA.findByPk(req.params.id, {
            include: Conflict
        });
        if (!organizationA) {
            return res.status(404).send('Organization A not found');
        }
        return res.status(200).json(organizationA);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllOrgA,
    getOneOrgA,
    createOrgA,
    updateOrgA,
    deleteOrgA,
    getOrganizationAConflictsLazy,
    getOrganizationAConflictsEager,
}