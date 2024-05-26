const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },  
    dateCreate: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Client', ClientSchema);