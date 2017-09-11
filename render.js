'use strict'
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
