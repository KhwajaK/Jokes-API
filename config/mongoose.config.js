const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Jokes_DB',{
    useNewUrlParser:true,
    useUnifiedTopology: true})
    .then(() => console.log("Connection to DB established"))
    .catch(err => console.log('Something went wrong with connection to DB', err));