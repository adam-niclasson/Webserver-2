const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./module.js')
const personModule = require('./personmodule')
const userModel = require('./Usermodel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render("pages/index.ejs", { name: "" })
})
app.get('/msg', (req, res) => {
    res.render("pages/messages.ejs", { name: "" })
})

app.get('/login', (req, res) => {
    res.render('pages/login.ejs')
})

app.get('/register', (req, res) => {
    res.render('pages/register.ejs')
})

app.post('/', function (req, res) {
    let person = personModule.createPerson(req.body.fname, req.body.age)
    databaseModule.storeElement(person)
    res.render("pages/index.ejs", { name: "" + req.body.fname })
})

app.post('/register', async (req, res) => {
    let user = userModel.createUser(req.body.uName, req.body.uEmail, req.body.uPassword)
    await databaseModule.storeElement(user)
    res.redirect('/login')
})

app.post('/login', async (req, res) => {
    let user = await userModel.getUser(req.body.uName)
    if (user) {
        if (user.uPassword === req.body.uPassword) {
            res.send('Success')
        } else {
            res.send('Incorrect Password')
        }
    } else {
        res.send('User Does Not Exist')
    }
})

app.post('/message', function (req, res) {
    let message = messageModel.createMessage(req.body.message, req.body.name)
    databaseModule.storeElement(message)
    res.render('pages/messages.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})