const router = require('express').Router()

const { getAllActors, getOneActor, createActor, updateActor, deleteActor, getActorMoviesLazy, getActorMoviesEager } = require('../controllers/actor')

router.get('/', getAllActors)
router.get('/:id/movies/eager', getActorMoviesEager)
router.get('/:id/movies/lazy', getActorMoviesLazy)
router.get('/:id', getOneActor)
router.post('/', createActor)
router.put('/:id', updateActor)
router.delete('/:id', deleteActor)


module.exports = router
