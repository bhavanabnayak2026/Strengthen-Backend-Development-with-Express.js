const express = require('express')

const app = express() 


// res.send("Hello")       // general response
// res.send("<h1>Hello</h1>") // HTML
// res.json(user)          // API JSON response ⭐

app.get('/users', (req, res) => {
    // res.send({
    //     id: 40, 
    //     name: 'Doraemon',
    //     role: 'actor'
    // })
    res.json({
        id  : 25, 
        name: 'Bhavana',
        role: 'Developer'
    })
})

app.listen(3000)

//http:localhost:3000/users