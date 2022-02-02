// now we will build a rest api with express

import express from "express";
import cors from 'cors';
import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

// to use json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// out json middleware will parse the incoming request body to json

// to use cors middleware
app.use(cors({
    origin: "http://localhost:3000"
}));

// this will redirect all the request with "/users" to the usersRoutes
app.use("/users", usersRoutes);


// now we will create end points with get method
// req and res are the parameters of get method
// all the routes we are gonna have in this app are
// get  => /users ==> finds all the users
// post => /users ==> creates a new user
// get  => /users/:id ==> finds a user by id
// deelte => /users/:id ==> deletes a user by id
//patch => /users/:id ==> updates a user by id
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log("post route reached");
    console.log(req.body);
    res.send("post route reached");
})




// app that will listen to incoming requests
app.listen(port, () => console.log(`server is running on port ${port}`));