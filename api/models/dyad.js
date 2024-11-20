const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");
const Organization_a = require("../models/organization_a");
const Organization_b = require("../models/organization_b");

const Dyad = sequelize.define(
  "dyad",
  {
    dyad_id: {
      type: DataTypes.INTEGER,
    },
    org_a_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: Organization_a,
        key: "org_a_id",
      },
    },
    org_b_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: Organization_b,
        key: "org_b_id",
      },
    },
  },
  { timestamps: false, indexes: [{ fields: ["dyad_id"] }] }
);

module.exports = Dyad;
