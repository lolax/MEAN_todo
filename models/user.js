const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    name: {
        type: String,
        required: true
    }
})