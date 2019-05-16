const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('todo', {
    text: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'user'
    },
    done: Boolean
})