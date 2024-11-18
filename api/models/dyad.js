const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Dyad = sequelize.define(
    'dyad',
    {
    },
    { timestamps: false }
)

module.exports = Dyad