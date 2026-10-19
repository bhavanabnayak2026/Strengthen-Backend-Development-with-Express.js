const express = require('express')
const app = express() 

const addUser = (req, res, next) => {
    req.user = {
        name: "Bhavana",
        role: "admin"
    }

    next()
}

app.get('/profile', addUser, (req, res) => {
    res.json(req.user)
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})