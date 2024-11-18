const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Actor = sequelize.define(
    'actor',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Actor