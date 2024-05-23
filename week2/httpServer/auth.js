const express = require ("express")
const jwt = require("jsonwebtoken")
const jwtPass = "Some backend passWord"
const app = express()
const PORT = 3000
const zod = require("zod");
app.use(express.json());

const allUsers = [
    {
        username : "abc@gmail.com",
        password : "123",
        name : "abc"
    },
    {   
        username : "def@gmail.com",
        password : "456",
        name : "def"

    },
    {
        username : "xyz@gmail.com",
        password : "891",
        name : "xyz"
    }
]

const signInSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})

function userExists(username, password){
    const val = allUsers.find( t => t.username === username && t.password === password)
    if(val) return true;
    else false;
}

app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        res.status(403).json({
            msg : "User does not exists in our memory db"
        })
    }

    var token = jwt.sign({username : username}, jwtPass);
    return res.json({
        token,
    })

})

app.get("/users", (req,res) =>{
    
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPass);
        const username = decoded.username;
        const arr = allUsers.filter(t=> t.username != username);
        const arr2 = [];
        arr.forEach(t => arr2.push(t.username));


        console.log(arr);
        console.log(arr2);
        
        res.json({
            msg : "So everything is working correct ig",
            arr2
        })
    }
    catch(err){
        return res.status(403).json({
            msg : "Invalid Token"
        })
    }
    
})

app.listen(PORT, (req,res)=>{
    console.log(`We are listening on port ${PORT}`);
})

