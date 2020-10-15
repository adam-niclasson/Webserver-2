const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    message: String
});

const message = mongoose.model('message', messageSchema);

exports.createMessage = (name, message) => {
    let message = new message({
        name: name,
        message: message
    })
    return message;
}