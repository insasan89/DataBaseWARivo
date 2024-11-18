const { sequelize } = require("../../database/index");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("Member", "Admin"),
            defaultValue: "Admin"
        },
    },
    { timestamps: false }
);

module.exports = User;
