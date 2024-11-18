const router = require('express').Router()

const { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie, addActorToMovie } = require('../controllers/movie')

router.get('/', getAllMovies)
router.get('/:id', getOneMovie)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)
router.put('/:movieId/actor/:actorId', addActorToMovie)


module.exports = router