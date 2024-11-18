const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Conflict = sequelize.define(
    'conflict',
    {
        dyad_id: {
            type: DataTypes.INTEGER,
        },
        active: {
            type: DataTypes.BOOLEAN,//Esta bien?
        },
        type_of_conflict: {
            type: DataTypes.INTEGER,
        },
        deaths_a: {
            type: DataTypes.INTEGER,
        },
        deaths_b: {
            type: DataTypes.INTEGER,
        },
        contry_conflict: {
            type: DataTypes.STRING,
            allowNull: false,
        }
         //falta la foreign key
    },
    { timestamps: false }
)

module.exports = Conflict