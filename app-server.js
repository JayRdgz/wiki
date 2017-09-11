'use strict'
const express = require('express')

let app = express()

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
        alert('Hello world')

})
