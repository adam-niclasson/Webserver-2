const express = require('express')
const labb = require('./labb')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())


let no = "YOU SHALL NOT PASS!"
let yes = "You may pass into mother russia"


const clientDir = __dirname + '\\client\\'

//labb.funk1("Niklas QuadKaKa")

let sum = labb.add(1, 2) //3
let dif = labb.sub(1, 2) //3
let prod = labb.multi(5, 2) //3

console.log("Summan är: " + labb.add(1, 2) + " Differansen:" + labb.sub(1, 2) + " Produketen; " + labb.multi(5, 2))

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))

app.get('/mainStyle', (req, res) => {
    res.sendFile(clientDir + 'shit.css')
})

app.get('/ded', (req, res) => {
    res.sendFile(clientDir + `ded.gif`)
})

app.post('/', function (req, res) {
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
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))