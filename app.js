//loads express
const express = require("express")

//creates express application
const app = express()

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
})

//a route is HTTP method + path + handler
app.get('/', (req, res) => {
    res.send("Hello world")
}) //http://localhost:3000/ o/p Hello world

app.get('/about', (req, res) => {
    res.send("About page")
})

app.get('/contact', (req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.send("Contact page")
})

// NOTE 
// app.get() = What should I do?
// app.listen() = Where should I listen?