const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Organization_a = sequelize.define(
  "organization_a",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    org_a_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    org_a_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: false,
        fields: ["org_a_id"],
      },
    ],
  }
);

module.exports = Organization_a;
