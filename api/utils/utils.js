const ucdpAPI = require("./instance")
const Conflict = require("../models/conflict")
const Location = require("../models/location")
const Organization_a = require("../models/organization_a")
const Organization_b = require("../models/organization_b")
const Dyad = require("../models/dyad")

async function insertDataOnConflict () {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
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
        const data = events.forEach(({ longitude, latitude,conflict_new_id }) => {
            Location.create({
                longitude: longitude,
                latitude : latitude,
                conflict_id: conflict_new_id
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
        const data = events.forEach(({ side_a_new_id, side_a}) => {
            Organization_a.create({
                org_a_id: side_a_new_id,
                org_a_name: side_a,
            })
        });

        // Send processed data as a response
        console.log("Data added to the table Organization_a")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}
async function insertDataOnOrganization_b() {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
        // Transform API Data to Fit Schema
        const data = events.forEach(({ side_b_new_id, side_b }) => {
            Organization_b.create({
                org_b_id: side_b_new_id,
                org_b_name: side_b,
            })
        });

        // Send processed data as a response
        console.log("Data added to the table Organization_b")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}

async function insertDataOnDyad() {
    try {
        const response = await ucdpAPI.get();
        const events = response.data.Result;
        // Transform API Data to Fit Schema
        const data = events.forEach(({ dyad_new_id, side_b_new_id, side_a_new_id }) => {
            Dyad.create({
                dyad_id: dyad_new_id,
                org_a_id: side_a_new_id,
                org_b_id: side_b_new_id
            })
        });

        // Send processed data as a response
        console.log("Data added to the table Dyad")
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}
const injectionSQL = async () =>  {
    try {
        console.log("estoy dentro")
        await insertDataOnOrganization_a()
        await insertDataOnOrganization_b()
        await insertDataOnDyad()
        await insertDataOnConflict()
        await insertDataOnLocation()
       
    } catch(error){
        console.error(error.message)
    }
}

module.exports = injectionSQL