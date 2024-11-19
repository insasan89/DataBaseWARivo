const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Organization_a = sequelize.define(
    'organization_a',
    {
        org_a_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        org_a_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
    },
    { timestamps: false }
)

module.exports = Organization_a