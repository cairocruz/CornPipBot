const routes = require("express").Router();
const apiTmdb = require("./api/apiTmdb")

const INIT_VALUE = 0
const YEAR_INIT = 1970
const YEAR_MAX = 2021
const MAX_VALUE = 6
const RETURN_SUCESS = 200

function getRandomYear(MIN,MAX){
    return Math.random()*(MAX - MIN)+MIN;
}
setInterval(function run(){
    yearSelector = parseInt(getRandomYear(YEAR_INIT,YEAR_MAX));
},2000);


//ação
routes.get("/action", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=28")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: "http://image.tmdb.org/t/p/w500"+repo.poster_path,
        }))
  
        

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})
//comedia
routes.get("/comedia", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=35")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: "http://image.tmdb.org/t/p/w500"+repo.poster_path
        }))
  
        

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})
//drama
routes.get("/drama", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=18")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: "http://image.tmdb.org/t/p/w500"+repo.poster_path
        }))
  
        

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})
//terror
routes.get("/terror", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=27")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: "http://image.tmdb.org/t/p/w500"+repo.poster_path
        }))
  
        

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})
//aventura
routes.get("/aventura", async (req, res) => {
    try{''
        const {data} = await apiTmdb.get("/3/discover/movie?api_key=25ee67d83ff241397fc126e2cd86b25d&language=pt-BR&page=1&primary_release_year="+yearSelector+"&with_genres=12")
       const genrefil = data.results.slice(INIT_VALUE, MAX_VALUE)
       const JsonExit = genrefil.map(repo => ({
            name: repo.original_title,
            description: repo.overview,
            image: "http://image.tmdb.org/t/p/w500"+repo.poster_path,

        }))
  
        

        res.status(RETURN_SUCESS).json(JsonExit)
    } catch(err)
    {
        res.send({ err: err.message})
    }
})
module.exports = routes;