const OrgA = require("../api/models/organization_a");
const OrgB = require("../api/models/organization_b");
const Conflict = require("../api/models/conflict");
const Location = require("../api/models/location");
const User = require("../api/models/user.model");
const Dyad = require("../api/models/dyad");

function addRelationsToModels() {
  try {
    Conflict.hasOne(Location, { foreignKey: "conflict_id" });
    Location.belongsTo(Conflict, { foreignKey: "conflict_id" });

    OrgA.hasMany(Dyad, { foreignKey: "org_a_id" });
    Dyad.belongsTo(OrgA, { foreignKey: "org_a_id" });

    OrgB.hasMany(Dyad, { foreignKey: "org_b_id" });
    Dyad.belongsTo(OrgB, { foreignKey: "org_b_id" });

    Dyad.hasMany(Conflict, { foreignKey: "dyad_id" });
    Conflict.belongsTo(Dyad, { foreignKey: "dyad_id" });

    console.log("Relations added to all models");
  } catch (error) {
    throw error;
  }
}

module.exports = addRelationsToModels;
