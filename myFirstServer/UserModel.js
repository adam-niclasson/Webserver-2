const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

exports.createUser = (uName, uEmail, uPassword) => {
    let user = new User({
        name: uName,
        email: uEmail,
        password: uPassword
    })
    return user;
}

exports.getUser = async (uName) => {
    var user = await User.Find({ name: uName })
    return user
}