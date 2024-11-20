const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");
const Dyad = require("./dyad");

const Conflict = sequelize.define(
  "conflict",
  {
    conflict_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
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
    country_conflict: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dyad_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: Dyad,
        key: "dyad_id",
      },
    },
  },
  { timestamps: false, indexes: [{ fields: ["conflict_id"] }] }
);

module.exports = Conflict;
