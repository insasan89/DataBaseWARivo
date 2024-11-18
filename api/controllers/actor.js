const Actor = require('../models/actor')
const Movie = require('../models/movie')
const { Op } = require('sequelize')

async function getAllActors(req, res) {
    try {
        if (!Object.values(req.query).length) {
            const actors = await Movie.findAll()
            if (actors) {
                return res.status(200).json(actors)
            } else {
                return res.status(404).send('No actors found')
            }
        } else {
            const actors = await Actor.findAll({
                where: {
                    [Op.and]: [
                        req.query
                    ]
                }
            })
            if (actors.length !== 0) {
                return res.status(200).json(actors)
            } else {
                return res.status(404).send('No matches found')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneActor(req, res) {
    try {
        const actor = await Actor.findByPk(req.params.id)

        if (actor) {
            return res.status(200).json(actor)
        } else {
            return res.status(404).send('Actor not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createActor(req, res) {
    try {
        const actor = await Actor.create(req.body)
        return res.status(200).json({ message: 'Actor created', actor: actor })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateActor(req, res) {
    try {
        const [actorExist, actor] = await Actor.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        if (actorExist !== 0) {
            return res.status(200).json({ message: 'Actor updated', actor: actor })
        } else {
            return res.status(404).send('Actor not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteActor(req, res) {
    try {
        const actor = await Actor.destroy({
            where: {
                id: req.params.id
            }
        })
        if (actor) {
            return res.status(200).json('Actor deleted')
        } else {
            return res.status(404).send('Actor not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getActorMoviesLazy(req, res) {

    try {
        const actor = await Actor.findByPk(req.params.id);
        const movies = await actor.getMovies();
        if (!actor) {
            console.log(req.params)
            return res.status(404).send('Actor not found', req.params);
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


async function getActorMoviesEager(req, res) {
    try {
        const actor = await Actor.findByPk(req.params.id, {
            include: Movie
        });
        if (!actor) {
            return res.status(404).send('Actor not found');
        }
        return res.status(200).json(actor);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllActors,
    getOneActor,
    createActor,
    updateActor,
    deleteActor,
    getActorMoviesLazy,
    getActorMoviesEager,
}