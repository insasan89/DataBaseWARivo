const Conflict = require('../models/conflict')
const { Op } = require('sequelize')

async function getAllConflicts(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const conflicts = await Conflict.findAll()
            if (conflicts) {
                return res.status(200).json(conflicts)
            } else {
                return res.status(404).send('No conflicts found')
            }
        } else {
            const conflicts = await Conflict.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (conflicts.length !== 0) {
                return res.status(200).json(conflicts)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneConflict(req, res) {
    try {
        const conflict = await Conflict.findByPk(req.params.id)

        if (conflict) {
            return res.status(200).json(conflict)
        } else {
            return res.status(404).send('Conflict not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createConflict(req, res) {
    try {
        const conflict = await Conflict.create(req.body)
        return res.status(200).json({ message: 'Conflict created', conflict: conflict })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateConflict(req, res) {
    try {
        const [conflictExist, conflict] = await Conflict.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (conflictExist !== 0) {
            return res.status(200).json({ message: 'Conflict updated', conflict: conflict })
        } else {
            return res.status(404).send('Conflict not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteConflict(req, res) {
    try {
        const conflict = await Conflict.destroy({
            where: {
                id: req.params.id
            }
        })
        if (conflict) {
            return res.status(200).json('Conflict deleted')
        } else {
            return res.status(404).send('Conflict not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllConflicts,
    getOneConflict,
    createConflict,
    updateConflict,
    deleteConflict
}
