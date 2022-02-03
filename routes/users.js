import express from "express";
import { getUser, getUserById, createUser, deleteUserById, patchUserById } from '../contorllers/users.js'
const router = express.Router();

// all routes in this are starting with /users
router.get("/", getUser)


// now when we push teh user which we got from the post request
// it will be pushed to our db
// and to get the dat from post we use midle ware
// we will use body parser
// and we will use json middleware
router.post("/", createUser)

// users/:id => id being 2 or anything
// we can access the id by using req.params.id
router.get("/:id", getUserById)


// now we can get data based on the id of the data
// so we can also delete the data based on the id

router.delete("/:id", deleteUserById)

// put -> is used to completely overide something
// patch -> is used to partially modify something

router.patch("/:id", patchUserById)


export default router;