const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Organization_b = sequelize.define(
  "organization_b",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    org_b_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    org_b_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: false,
        fields: ["org_b_id"],
      },
    ],
  }
);

module.exports = Organization_b;
