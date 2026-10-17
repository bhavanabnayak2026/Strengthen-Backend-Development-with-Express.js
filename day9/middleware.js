const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("Middleware 1")
    req.message = "Hello from middleware"
    next()
})

app.use((req, res, next) => {
    console.log("Middleware 2")
    next()
})

app.get('/', (req, res) => {
    res.send(req.message)
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})


//run http://localhost:3000/

