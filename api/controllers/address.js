const Address = require('../models/organization_b.js')
const { Op } = require('sequelize')

async function getAllAddresses(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const addresses = await Address.findAll()
            if (addresses) {
                return res.status(200).json(addresses)
            } else {
                return res.status(404).send('No addresses found')
            }
        } else {
            const addresses = await Address.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (addresses.length !== 0) {
                return res.status(200).json(addresses)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneAddress(req, res) {
    try {
        const address = await Address.findByPk(req.params.id)

        if (address) {
            return res.status(200).json(address)
        } else {
            return res.status(404).send('Address not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createAddress(req, res) {
    try {
        const address = await Address.create(req.body)
        return res.status(200).json({ message: 'Address created', address: address })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateAddress(req, res) {
    try {
        const [addressExist, address] = await Address.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (addressExist !== 0) {
            return res.status(200).json({ message: 'Address updated', address: address })
        } else {
            return res.status(404).send('Address not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteAddress(req, res) {
    try {
        const address = await Address.destroy({
            where: {
                id: req.params.id
            }
        })
        if (address) {
            return res.status(200).json('Address deleted')
        } else {
            return res.status(404).send('Address not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAddresses,
    getOneAddress,
    createAddress,
    updateAddress,
    deleteAddress
}