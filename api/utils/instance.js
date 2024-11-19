const axios = require('axios');

const ucdpAPI = axios.create({
    baseURL: 'https://ucdpapi.pcr.uu.se/api/gedevents/24.1?pagesize=5'
})

module.exports = ucdpAPI