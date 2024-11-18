const Organization_a= require('../api/models/organization_a')
const Organization_b = require('../api/models/organization_b')
const Conflict = require('../api/models/conflict')
const Location = require('../api/models/location')


function addRelationsToModels() {
    try {
        User.hasOne(Address, { foreignKey: 'userId' })
        Address.belongsTo(User)

        Country.hasMany(User, { foreignKey: 'countryId' })
        User.belongsTo(Country)

        Actor.belongsToMany(Movie, { through: 'Actor_Movie', timestamps: false })
        Movie.belongsToMany(Actor, { through: 'Actor_Movie', timestamps: false })

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels