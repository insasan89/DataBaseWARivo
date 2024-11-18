const Location = require('../models/location')
const { Op } = require('sequelize')

async function getAllLocations(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const locations = await Location.findAll()
            if (locations) {
                return res.status(200).json(locations)
            } else {
                return res.status(404).send('No locations found')
            }
        } else {
            const locations = await Location.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (locations.length !== 0) {
                return res.status(200).json(locations)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneLocation(req, res) {
    try {
        const location = await Location.findByPk(req.params.id)

        if (location) {
            return res.status(200).json(location)
        } else {
            return res.status(404).send('Location not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createLocation(req, res) {
    try {
        const location = await Location.create(req.body)
        return res.status(200).json({ message: 'Location created', location: location })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateLocation(req, res) {
    try {
        const [locationExist, location] = await Location.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (locationExist !== 0) {
            return res.status(200).json({ message: 'Location updated', location: location })
        } else {
            return res.status(404).send('Location not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteLocation(req, res) {
    try {
        const location = await Location.destroy({
            where: {
                id: req.params.id
            }
        })
        if (location) {
            return res.status(200).json('Location deleted')
        } else {
            return res.status(404).send('Location not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    updateLocation,
    deleteLocation,
}
