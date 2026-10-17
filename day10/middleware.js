const express = require('express')

const app = express()

const checkUser = (req, res, next) => {
    console.log("Checking user...")
    next()
}

const checkPermission = (req, res, next) => {
    console.log("Checking permissions...")
    next()
}

app.get('/dashboard', checkUser, checkPermission, (req, res) => {
    res.send('Dashboard')
})

app.get('/', (req, res) => {
    res.send("Home")
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})

//run http://localhose:300 
// when you run get you will not see checking user and checking. permissions in terminal but you see for dashboard 