'use strict'
const express = require('express')
const path = require('path')
const pug = require('pug')

let app = express()

var PORT = process.env.PORT || 3000

app.use("/static", express.static(path.join(__dirname, "/public/static")))

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.get('/', function(req, res) {
    res.render('template', {
        title: 'Wiki - Node based',
        message: 'Hello there'
    })
})

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT)
})
