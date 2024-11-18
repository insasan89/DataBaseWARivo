const Dyad = require('../models/dyad')
const { Op } = require('sequelize')

async function getAllDyads(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const dyads = await Dyad.findAll()
            if (dyads) {
                return res.status(200).json(dyads)
            } else {
                return res.status(404).send('No dyads found')
            }
        } else {
            const dyads = await Dyad.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (dyads.length !== 0) {
                return res.status(200).json(dyads)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneDyad(req, res) {
    try {
        const dyad = await Dyad.findByPk(req.params.id)

        if (dyad) {
            return res.status(200).json(dyad)
        } else {
            return res.status(404).send('Dyad not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createDyad(req, res) {
    try {
        const dyad = await Dyad.create(req.body)
        return res.status(200).json({ message: 'Dyad created', dyad: dyad })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateDyad(req, res) {
    try {
        const [dyadxist, dyad] = await Dyad.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (dyadExist !== 0) {
            return res.status(200).json({ message: 'Dyad updated', dyad: dyad })
        } else {
            return res.status(404).send('Dyad not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteDyad(req, res) {
    try {
        const dyad = await Dyad.destroy({
            where: {
                id: req.params.id
            }
        })
        if (dyad) {
            return res.status(200).json('Dyad deleted')
        } else {
            return res.status(404).send('Dyad not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllDyads,
    getOneDyad,
    createDyad,
    updateDyad,
    deleteDyad
}