const axios = require("axios")
const baseAPI = "https://api.themoviedb.org"
const apiTmdb = axios.create({
    baseURL: baseAPI
})

module.exports = apiTmdb;