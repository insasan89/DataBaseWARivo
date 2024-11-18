const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Organization_b = sequelize.define(
    'organization_b',
    {
        org_b_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
)

module.exports = Organization_b