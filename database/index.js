const { Sequelize } = require('sequelize')

// Connect to PostgreSQL creating a new sequelize instance
const sequelize = new Sequelize("CONFLICTS", "vicente", "student2024", {
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3306",
    logging: false,
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('YES! Connection to DB has been established successfully.')
    } catch (error) {
        throw error
    }
}

async function syncModels(value) {
    const state = {
        alter: { alter: true },
        force: { force: true },
    }

    try {
        await sequelize.sync(state[value] || '')
        console.log(`YES! All models were synchronized successfully using sync(${JSON.stringify(state[value]) || ''}).`)
    } catch (error) {
        throw error
    }
}

module.exports = { sequelize, checkConnection, syncModels }
