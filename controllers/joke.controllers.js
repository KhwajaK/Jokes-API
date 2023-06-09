const Joke = require('../models/joke.model');

module.exports = {
    // CRUD
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err))
    },
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err))
    },
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err))
    },
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.status(400).json(err))
    },
    deleteJoke: (req,res) => {
        Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getRandomJoke: (req, res) => {
        Joke.aggregate([{ $sample: {size:1}}])
        .then(randomJoke => res.json(randomJoke[0]))
        .catch(err => res.json(err))
    }
}