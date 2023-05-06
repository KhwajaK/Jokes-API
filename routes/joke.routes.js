const JokeController = require('../controllers/joke.controllers')

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/random', JokeController.getRandomJoke );
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke)
}