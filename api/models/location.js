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
        },
        conflict_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { timestamps: false }
)

module.exports = Location