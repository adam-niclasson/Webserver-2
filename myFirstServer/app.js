const express = require('express')
const labb = require('./labb')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

let no = "YOU SHALL NOT PASS!"
let yes = "You may pass into mother russia"

const Person = mongoose.model('Person', personSchema);

//labb.funk1("Niklas QuadKaKa")

let sum = labb.add(1, 2) //3
let dif = labb.sub(1, 2) //3
let prod = labb.multi(5, 2) //3

console.log("Summan är: " + labb.add(1, 2) + " Differansen:" + labb.sub(1, 2) + " Produketen; " + labb.multi(5, 2))

app.get('/', (req, res) => {
    res.sendFile(clientDir + 'index.html')
})

app.get('/mainStyle', (req, res) => {
    res.sendFile(clientDir + 'shit.css')
})

app.get('/ded', (req, res) => {
    res.sendFile(clientDir + `ded.gif`)
})

app.post('/', function (req, res) {
    var adam = new Person({ name: req.body.name, age: req.body.age })
    res.send('POST request to the homepage')

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

    console.log(req.body.name)
    console.log(req.body.email)

    databaseModule.storePerson(req.body.name, req.body.email, req.body.age)

    res.redirect('/')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})