const mongoose = require('mongoose')
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    degree : {
        type : String,
        required: true,
        default: "MCA"
    }
})
module.exports = mongoose.model('Alien', alienSchema)