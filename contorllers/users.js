
// to reduce complexity we use controllers in api
// so that we can control the logic 
// and the exported funtions are imported in the main 
// users.js and used there accordingly

import { v4 as uuidv4 } from 'uuid'

let users = []



export const createUser = (req, res) => {
    console.log("post route reached")
    console.log(req.body)
    const userId = uuidv4();
    const user = req.body
    const userWithId = { ...user, id: userId }

    users.push(userWithId)

    // we can send a response to the place where the request was made
    // that the post was reached
    res.send(`post route reached ${req.body.firstName} is added to the database`)
}

export const getUser = (req, res) => {
    console.log(users)
    res.send(users)
}


export const getUserById = (req, res) => {
    // res.send("we hit the get id route")
    console.log(req.params)
    const { id } = req.params
    const user = users.find(user => user.id === id)
    if (user) {
        res.send(user)
    } else {
        res.send("user not found")
    }

    console.log("post route it is")
}


export const deleteUserById = (req, res) => {
    const { id } = req.params
    // jane 123
    // john 124
    // id to delete = 123
    // 
    users = users.filter((user) => user.id !== id)
    res.send(`users with ${id} is deleted`)
}

export const patchUserById = (req, res) => {
    const { id } = req.params

    const { firstName, lastName, age } = req.body

    const userToBeUpdated = users.find(user => user.id === id)

    if (firstName) userToBeUpdated.firstName = firstName
    if (lastName) userToBeUpdated.lastName = lastName
    if (age) userToBeUpdated.age = age
    res.send(`the user with id ${id} is updated`)
}