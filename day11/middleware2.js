const express = require('express')
const app = express()

const checkRole = (req, res, next) => {
    const role = req.query.role

    if (role === 'admin') {
        next()
    } else {
        res.status(403).send('Access denied')
    }
}

app.get('/admin', checkRole, (req, res) => {
    res.send("Welcome admin")
})

app.listen(3000, (req, res) => {
    console.log("Server is running at port 3000")
})