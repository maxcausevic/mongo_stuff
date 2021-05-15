const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "joke required!"],
        minLength:[3, "min length must be 3"]
    },
    punchline: {
        type: String,
        required:[true, "punchline required!"],
        minLength:[3, "min length must be 3"]
    },

},{timestamps:true});


const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;


