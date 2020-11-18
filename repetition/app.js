const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '\\client\\'))
app.use(express.json())
app.use(express.urlencoded())

app.post('/test', function (req, res) {

    console.log(req.body.message);
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port port!`))