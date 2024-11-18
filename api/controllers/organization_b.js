const OrgB = require('../models/organization_b')
const Conflict = require('../models/conflict')
const { Op } = require('sequelize')

async function getAllOrgB(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const organizationB = await OrgB.findAll()
            if (organizationB) {
                return res.status(200).json(organizationB)
            } else {
                return res.status(404).send('No organizations B found')
            }
        } else {
            const organizationB = await OrgB.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (organizationB.length !== 0) {
                return res.status(200).json(organizationB)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneOrgB(req, res) {
    try {
        const organizationB = await OrgB.findByPk(req.params.id)

        if (organizationB) {
            return res.status(200).json(organizationB)
        } else {
            return res.status(404).send('Organization B not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createOrgB(req, res) {
    try {
        const organizationB = await OrgB.create(req.body)
        return res.status(200).json({ message: 'Organization B created', organizationB: organizationB })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOrgB(req, res) {
    try {
        const [organizationBExist, organizationB] = await OrgB.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (organizationBExist !== 0) {
            return res.status(200).json({ message: 'Organization B updated', organizationB: organizationB })
        } else {
            return res.status(404).send('Organization B not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOrgB(req, res) {
    try {
        const organizationB = await OrgB.destroy({
            where: {
                id: req.params.id
            }
        })
        if (organizationB) {
            return res.status(200).json('Organization B deleted')
        } else {
            return res.status(404).send('Organization B not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOrganizationBConflictsLazy(req, res) {

    try {
        const organizationB = await OrgB.findByPk(req.params.id);
        const conflict = await OrgB.getConflict();
        if (!organizationB) {
            console.log(req.params)
            return res.status(404).send('Organization B not found', req.params);
        }
        return res.status(200).json(conflict);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


async function getOrganizationBConflictsEager(req, res) {
    try {
        const organizationB = await OrgB.findByPk(req.params.id, {
            include: Conflict
        });
        if (!organizationB) {
            return res.status(404).send('Organization B not found');
        }
        return res.status(200).json(organizationB);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllOrgB,
    getOneOrgB,
    createOrgB,
    updateOrgB,
    deleteOrgB,
    getOrganizationBConflictsLazy,
    getOrganizationBConflictsEager,
}