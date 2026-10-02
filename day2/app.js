const express = require('express')

const app = express()


//ROUTE = httpt method + path + handler
app.get('/hello', (req, res) => {
    console.log(req.method)
    res.send("Hello Jon")
    console.log(req.url)
})

app.get('/skills', (req, res) => {
    res.send('I am learning backend development')
})

app.listen(3000) 