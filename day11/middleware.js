const express = require('express')
const app = express()

const checkAuth = (req, res, next) => {
    const isLoggedIn = false 

    if(isLoggedIn){
        next()
    } else {
        res.status(401).send("Please login..")
    }
}

app.get('/profile', checkAuth, (req, res) => {
    res.send("Profile page")
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})