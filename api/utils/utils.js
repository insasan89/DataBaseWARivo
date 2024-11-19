const ucdpAPI = require("./instance")
const Conflict = require("../models/conflict")


async function insertDataOnConflict () {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
        // Transform API Data to Fit Schema
       const data = events.forEach(({ conflict_new_id, active_year, type_of_violence, deaths_a, deaths_b, country }) => {
            Conflict.create({
                conflict_id: conflict_new_id,
                active: active_year,
                type_of_conflict: type_of_violence,
                deaths_a: deaths_a,
                deaths_b: deaths_b,
                country_conflict: country
            })
        });
        // Send processed data as a response
        console.log("Data added to the table Conflicts")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}

async function insertDataOnLocation() {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
        // Transform API Data to Fit Schema
        const data = events.forEach(({ conflict_new_id, active_year, type_of_violence, deaths_a, deaths_b, country }) => {
            Location.create({
                conflict_id: conflict_new_id,
                active: active_year,
                type_of_conflict: type_of_violence,
                deaths_a: deaths_a,
                deaths_b: deaths_b,
                country_conflict: country
            })
        });

        // Send processed data as a response
        console.log("Data added to the table Location")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}

async function insertDataOnOrganization_a() {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
        // Transform API Data to Fit Schema
        const data = events.forEach(({ conflict_new_id, active_year, type_of_violence, deaths_a, deaths_b, country }) => {
            Organization_a.create({
                conflict_id: conflict_new_id,
                active: active_year,
                type_of_conflict: type_of_violence,
                deaths_a: deaths_a,
                deaths_b: deaths_b,
                country_conflict: country
            })
        });

        // Send processed data as a response
        console.log("Data added to the table Organization_a")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}

const injectionSQL = async () =>  {
    try {
        await insertDataOnConflict()
    } catch(error){
        console.error(error.message)
    }
}

module.exports = {injectionSQL}