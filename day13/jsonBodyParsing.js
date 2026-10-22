const express = require('express')
const app = express() 

app.use(express.json()) //This tells Express to process incoming JSON request bodies so that the parsed data becomes available through req.body

const validateUser = (req, res, next) => {
    const {name, age} = req.body

    if (!name || age < 0) {
        return res.status(400).send("Invalid user data")
    }

    next()
}

app.post('/users', validateUser, (req, res) => {
    console.log(req.body)
    res.status(201).json(req.body)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
