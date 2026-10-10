// topic: req.headers and res.headers

const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    //read request header 
    console.log(req.headers)
    // console.log(req.headers['content-type'])


    //set response header 
    res.set("X-Developer", "Bhavana")

    res.send({
        message: 'User created',
        user: req.body
    })
})

app.listen(3000, (req, res) => {
    console.log('Server is running at port 3000')
})