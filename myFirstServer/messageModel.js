const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    message: String
});

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (name, text) => {
    let message = new Message({
        name: name,
        message: text
    })
    return message;
}

exports.getAllMessages = async () => {
    let messages = await Message.find({})
    return messages
}