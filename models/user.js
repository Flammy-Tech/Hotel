const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    password: {
        type: String
    },
    identification: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);