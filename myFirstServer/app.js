const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./module.js')
const personModule = require('./personmodule')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

const no = "YOU SHALL NOT PASS!"
const yes = "You may pass into mother russia"

app.get('/', (req, res) => {
    res.render("pages/index.ejs", { name: "" })
})
app.get('/msg', (req, res) => {
    res.render("pages/messages.ejs", { name: "" })
})

app.post('/', function (req, res) {

    if (req.body.age == 18 && req.body.fname === "Adam") {
        console.log(yes)
    }
    else if (req.body.age != 18 && req.body.fname === "Adam") {
        console.log(no)
    }
    else if (req.body.age == 18 && req.body.fname != "Adam") {
        console.log(no)
    }
    else {
        console.log("You don't exist and your life is a lie.")
    }

    let person = personModule.createPerson(req.body.fname, req.body.age)

    databaseModule.storeElement(person)

    res.render("pages/index.ejs", { name: "" + req.body.fname })
})
app.post('/message', function (req, res) {

    let message = messageModel.createMessage(req.body.message, req.body.name)
    databaseModule.storeElement(message)

    res.render('pages/messages.ejs')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})