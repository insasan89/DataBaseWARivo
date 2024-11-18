const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Location = sequelize.define(
    'location',
    {
        latitude: {
            type: DataTypes.STRING,
        },
        longitude: {
            type: DataTypes.STRING,
        }
        //falta foreign key
    },
    { timestamps: false }
)

module.exports = Location