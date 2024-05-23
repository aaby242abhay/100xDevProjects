const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
const jwtPass = "Some random gibberish"

const mongoUrl = "mongodb+srv://aaby242abhay:%402l4P2@mongo101.mjuaccs.mongodb.net/testDataStorage";

app.use(express.json());

mongoose.connect(mongoUrl);

const user = mongoose.model("user", {
    name : String,
    username : String,
    password : String

});

app.post("/signup", async (req,res) =>{

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = user.findOne({email : username});
    
    if(existingUser) res.status(403).json({
        msg : "User already exists"
    })

    const newUser = new user({
        name : name,
        username : username,
        password : password
    })

    newUser.save().then(()=>{
        console.log("The user data has been uploaded");
    });

    res.json({
        newUser
    })

})

app.listen(port, ()=>{
    console.log(`We are currently listening on port ${port}`)
})