const routes = require("express").Router();
const apiTmdb = require("./api/apiTmdb")

const INIT_VALUE = 0
const YEAR_INIT = 1990
const YEAR_MAX = 2021
const MAX_VALUE = 6
const RETURN_SUCESS = 200

function getRandomYear(MIN,MAX){
    return Math.random()*(MAX - MIN)+MIN;
}
let yearSelector = parseInt(getRandomYear(YEAR_INIT,YEAR_MAX));

routes.get("/action", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=28")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: repo.poster_path
        }))

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})

module.exports = routes;