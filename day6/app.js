const express = require('express')

const app = express()

// this basically means it says whenever there is a req in json data, parse it. So, that I can access it through req.json (btw pp.use(express.json()) is the middleware that makes this possible.)
// The client can send JSON, but Express needs JSON-parsing middleware to understand that JSON and put the parsed result into req.body.
// Express can parse that JSON and make it available as:
app.use(express.json()) 

app.post('/users', (req, res) => {
    console.log(req.body)

    res.send({
        message: "User created", 
        user: req.body
    })
})

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000')
})

