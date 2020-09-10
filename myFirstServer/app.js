const express = require('express')
const labb = require('./labb')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

let name = "Adam Niclasson,"
let no = "YOU SHALL NOT PASS!"
let yes = "You may pass into mother russia"
let age = 18

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

app.post("/", (req, res) => {
    

    let name = req.body.Username;
    let password = req.body.Password;
    Module.registerUser(name, password);
    res.sendFile(clientDir + "indexlogin.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))