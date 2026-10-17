const express = require('express')

const app = express() 

//middlewear: it runs for incoming requests before the matching route handler.
// So instead of writing logging code separately inside every route, we can put the common logic in one middleware.
// That's one of the main reasons middleware exists. 🔥
app.use((req, res, next) => {
    // console.log("Middleware executed")

    // console.log("Method:", req.method)
    // console.log("URL:", req.url)

    console.log(`[${req.method}] ${req.url}`)

    //middleware can also add information to request
    // Middleware can add information to the req object, and that information is available to every route that comes after that middleware in the Express middleware chain.
    req.user = "Bhavana"
    req.role = "Admin"

    //next basically means "Pass control to the next middleware/handler in Express's request-processing chain."
    next()
})

app.get('/', (req, res) => {
    res.send(`hello ${req.user}`)
})

app.get('/users', (req, res) => {
    res.send("Users page")
})

app.get('/dashboard', (req, res) => {
    res.send(`Role: ${req.role}`)
})

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})