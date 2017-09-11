'use strict'
const express = require('express')

let app = express()

app.use("/static", express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Wiki - Node based',
        message: 'Hello there'
    })
})


const keyhint = []
const secretCode = "getmeaccess"

// # Listener for the events inside the DOM
window.addEventListener('keyup', function(e){

    // # Insert the key values
    keyhint.push(e.key)
    console.log(keyhint)

    // # validates de keys of the given values from the client side
    if ( keyhint.join('').includes(secretCode) )


})
