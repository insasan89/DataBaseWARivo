const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
})

const checkConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Esto tira");
  } catch (error) {
    throw new Error(error);
  }
};

const syncModels = async () => {
  try {
    await connection.sync();
    console.log("Models sync");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connection,
  checkConnection,
  syncModels,
};
