const OrgA = require('../api/models/organization_a')
const OrgB = require('../api/models/organization_b')
const Conflict = require('../api/models/conflict')
const Location = require('../api/models/location')
const User = require('../api/models/user.model')
const Dyad = require('../api/models/dyad')


function addRelationsToModels() {
    try {
        Conflict.hasOne(Location)
        Location.belongsTo(Conflict)

        OrgA.belongsToMany(OrgB, { through: Dyad, timestamps: false })
        OrgB.belongsToMany(OrgA, { through: Dyad, timestamps: false })

        Conflict.hasMany(Dyad)
        Dyad.belongsTo(Conflict)

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels