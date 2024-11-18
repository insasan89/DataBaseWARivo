const Actor = require('../api/models/actor')
const Address = require('../api/models/address.js')
const Country = require('../api/models/country')
const Movie = require('../api/models/movie')


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