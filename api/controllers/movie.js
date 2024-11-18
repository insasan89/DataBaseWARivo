const Movie = require('../models/movie')
const Actor = require('../models/actor')
const { Op } = require('sequelize')

async function getAllMovies(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const movies = await Movie.findAll()
            if (movies) {
                return res.status(200).json(movies)
            } else {
                return res.status(404).send('No movies found')
            }
        } else {
            const movies = await Movie.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (movies.length !== 0) {
                return res.status(200).json(movies)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneMovie(req, res) {
    try {
        const movie = await Movie.findByPk(req.params.id)

        if (movie) {
            return res.status(200).json(movie)
        } else {
            return res.status(404).send('Movie not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createMovie(req, res) {
    try {
        const movie = await Movie.create(req.body)
        return res.status(200).json({ message: 'Movie created', movie: movie })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateMovie(req, res) {
    try {
        const [movieExist, movie] = await Movie.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (movieExist !== 0) {
            return res.status(200).json({ message: 'Movie updated', movie: movie })
        } else {
            return res.status(404).send('Movie not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteMovie(req, res) {
    try {
        const movie = await Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        if (movie) {
            return res.status(200).json('Movie deleted')
        } else {
            return res.status(404).send('Movie not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function addActorToMovie(req, res) {
    try {
        const actor = await movie.addActor(actorId)
        return res.status(200).json({ message: 'Actor created', actor: actor })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    addActorToMovie
}
