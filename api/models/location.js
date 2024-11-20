const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Conflict = require('./conflict')

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
            unique: false,
            allowNull: false,
            references:{
                model: Conflict,
                key: "conflict_id"
            }
        },
    },
    { timestamps: false }
)

module.exports = Location