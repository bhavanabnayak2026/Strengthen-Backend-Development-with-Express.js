const express = require('express')

const app = express()

app.get('/test', (req, res, next) => {
    const error = new Error("Something went wrong")
    next(error)
})

const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    res.status(500).send("Something went wrong")
}

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})