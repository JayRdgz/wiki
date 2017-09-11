'use strict'
const express = require('express')
const path = require('path')
const pug = require('pug')

let app = express()

var PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")))

app.use('/public', function(req, res, next) {
    console.log(req.url)
    next()
})

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get('/', function(req, res) {
    res.render('template', {
        title: 'Wiki - Node based',
        message: 'Hello there'
    })
})

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT)
})
