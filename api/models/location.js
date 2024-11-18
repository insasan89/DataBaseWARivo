const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Location = sequelize.define(
    'location',
    {
       conflict_id: {
            type: DataTypes.INTEGER,
        },
        latitude: {
            type: DataTypes.POINT,
        },
        longitude: {
            type: DataTypes.POINT,
        }
        //falta foreign key
    },
    { timestamps: false }
)

module.exports = Location