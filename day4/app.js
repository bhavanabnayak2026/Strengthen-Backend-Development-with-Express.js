const express = require('express')

const app = express() 

//this lesson is about request parameters
app.get('/users/:id', (req, res) => {
    console.log(req.params)
    res.send('User found')
})

//multiple route parameters http://localhost:3000/users/100/posts/10
app.get('/users/:userId/posts/:postId', (req, res) => {
    console.log(req.params)
    console.log(req.params.userId)
    res.send('Post found')
})

//request params vs query params 
//http://localhost:3000/products/50?category=phone&sort=price 
app.get('/products/:id', (req, res) => {
    console.log('PARAMS:', req.params)
    console.log('QUERY:', req.query)

    res.send('Product found')
})

app.listen(3000)

//run this in browser: http://localhost:3000/users/25