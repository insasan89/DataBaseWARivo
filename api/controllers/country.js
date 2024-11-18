const Country = require('../models/conflict')
const { Op } = require('sequelize')

async function getAllCountries(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const countries = await Country.findAll()
            if (countries) {
                return res.status(200).json(countries)
            } else {
                return res.status(404).send('No countries found')
            }
        } else {
            const countries = await Country.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (countries.length !== 0) {
                return res.status(200).json(countries)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneCountry(req, res) {
    try {
        const country = await Country.findByPk(req.params.id)

        if (country) {
            return res.status(200).json(country)
        } else {
            return res.status(404).send('Country not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createCountry(req, res) {
    try {
        const country = await Country.create(req.body)
        return res.status(200).json({ message: 'Country created', country: country })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateCountry(req, res) {
    try {
        const [countryExist, country] = await Country.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (countryExist !== 0) {
            return res.status(200).json({ message: 'Country updated', country: country })
        } else {
            return res.status(404).send('Country not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCountry(req, res) {
    try {
        const country = await Country.destroy({
            where: {
                id: req.params.id
            }
        })
        if (country) {
            return res.status(200).json('Country deleted')
        } else {
            return res.status(404).send('Country not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCountries,
    getOneCountry,
    createCountry,
    updateCountry,
    deleteCountry
}
