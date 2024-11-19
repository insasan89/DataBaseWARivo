const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Organization_a = require("../models/organization_a")
const Organization_b = require("../models/organization_b")


const Dyad = sequelize.define(
    'dyad',
    {
        dyad_id: {
            type: DataTypes.INTEGER,
        },
       
    },
    { timestamps: false }
)

module.exports = Dyad