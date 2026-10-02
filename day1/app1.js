const express = require('express')

const app = express() 

app.get('/', (req, res) => {
    res.send('Hello Bhavana')
})

app.get('/profile', (req, res) => {
    res.send('This is my profile')
})

app.listen(3000, () => {
    console.log("Server started at 3000 port")
})