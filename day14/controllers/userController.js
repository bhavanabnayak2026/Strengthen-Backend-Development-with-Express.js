const createUser = require('../services/userService')

const createUserController = (req, res) => {
    const user = createUser(req.body)

    res.status(201).json(user)
}

module.exports = createUserController

// The controller says:
// "Give the service the data from the request."

// The service says:
// "I'll process/create the user and give you the result."

// Then the controller says:
// "Great, I'll send that result back to the client."