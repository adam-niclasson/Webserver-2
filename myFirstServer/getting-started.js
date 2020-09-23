const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

var adam = new Person({ name: "Adam", email: "a@a.a", age: 18 })

adam.save()