const express = require("express");
const app = express();
const zod = require("zod");

app.use(express.json());

const schema = z.array(z.number());


//{
//  email : string => email
//  password : atleast 8 chars
//  country : "IN" or "US"
//}

const s = z.object({
    email : zod.string(zod.email),
    password : zod.string().min(8),
    country : zod.literal("US").or(zod.literal("IN")),
    kidneys : zod.array(zod.number)
})

app.post("/health-checkup", (req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(response.success == false){
        res.send("The data input is " + response.error.issues.received);
    }


})

app.listen(3000, ()=>{
    console.log("We are currently listening on port 3000");
})