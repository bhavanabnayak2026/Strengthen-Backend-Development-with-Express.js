const express = require('express')

const app = express() 

app.get('/user', (req, res) => {
    res.status(200).json({
        id: 25, 
        name: 'Bhavana'
    })
})


app.post('/user', (req, res) => {
    res.status(201).json({
        message: 'User created'
    })
})

//meaning: Your request is not valid. Fix what you sent.
app.post('/user', (req, res) => {
    res.status(400).json({
        error: 'Name is required'
    })
})

app.post('/user', (req, res) => {
    res.status(401).json({
        error: 'Please login'
    })

    // 🔐 "Who are you?"
    // res.status(401).json({
    //     error: 'Please login'
    // })

    // 🚫 "I know who you are, but you're not allowed."
    // res.status(403).json({
    //     error: 'Access denied'
    // })

    // 💥 "The server had a problem."
    // res.status(500).json({
    //     error: 'Something went wrong'
    // })

})

// 404 — Not Found - 🔎 "I couldn't find it."
app.get('/user/:id', (req, res) => {
    res.status(404).json({
        error: 'User not found'
    })
})

app.listen(3000)

// One small distinction
// - 200 OK → request succeeded and you're returning the result
// - 201 Created → request succeeded and a new resource was created

//run: http://localhost:3000/user