require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const addRelationsToModels = require("./database/models");
const injectionSQL = require("./api/utils/utils");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

async function checkAndSyncPostgreSQL() {
  await checkConnection();
  addRelationsToModels();
  await syncModels();
}

function initializeAndListenWithExpress() {
  const app = express()
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes"))
    .listen(3002, () => {
      console.log(`> Listening on port: ${3002}`);
    });
}

async function startAPI() {
  await checkAndSyncPostgreSQL();
  initializeAndListenWithExpress();
  await injectionSQL();
}

startAPI();
