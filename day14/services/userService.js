const createUser = (userData) => {
    const user = {
        id: 1, 
        name: userData.name, 
        age: userData.age
    }

    return user
}

module.exports = createUser