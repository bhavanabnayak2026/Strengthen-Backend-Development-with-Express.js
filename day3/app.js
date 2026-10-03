const express = require('express')

const app = express() 

//express matches a route with incoming http method and the path of the incoming request.
//both must match the registered routes for the handler to execute  

app.get('/', (req, res) => {
    res.send('Welcome to my website')
})
app.get('/about', (req, res) => {
    res.send('About Bhavana')
})
app.get('/contact', (req, res) => {
    res.send('Contact Bhavana')
})
app.get('/users', (req, res) => {
    res.send('Here is the user')
})
app.post('/users', (req, res) => {
    res.send('User Created')
})
app.put("/users", (req, res) => {
    res.send("Update user");
})
app.patch("/users", (req, res) => {
    res.send("Partially update user");
})
app.delete("/users", (req, res) => {
    res.send("Delete user");
})

app.listen(3000)