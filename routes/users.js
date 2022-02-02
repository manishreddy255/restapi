import express from "express";
import { v4 as uuidv4 } from 'uuid'

const router = express.Router();

const users = [
    {
        firstName: "john",
        lastName: "doe",
        age: 30
    },
    {
        firstName: "jane",
        lastName: "doe",
        age: 25
    }
]

// all routes in this are starting with /users
router.get("/", (req, res) => {
    console.log(users)
    res.send(users)
})


// now when we push teh user which we got from the post request
// it will be pushed to our db
// and to get the dat from post we use midle ware
// we will use body parser
// and we will use json middleware
router.post("/", (req, res) => {
    console.log("post route reached")
    console.log(req.body)
    const userId = uuidv4();
    const user = req.body
    const userWithId = { ...user, id: userId }

    users.push(userWithId)

    // we can send a response to the place where the request was made
    // that the post was reached
    res.send(`post route reached ${req.body.firstName} is added to the database`)
})

export default router;