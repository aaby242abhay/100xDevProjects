import {z} from "zod";
import express from "express";
const app = express();

const userProfileSchema = z.object({
    name : z.string().min(1, {message : "Name cannot be empty"}),
    email : z.string().email({message : "Invalid email"}),
    age : z.number().min(18, {message : "Age must be greater than 18"}).optional()

})

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put('/user', (req,res) =>{
    const {success} = userProfileSchema.safeParse(req.body);
    // const updateBody : {
    //     name : string,  
    //     email : string,
    //     age? : number
    // } = req.body;

    const updateBody : FinalUserSchema = req.body;
    
    if(!success){
        res.status(400).json({});
    }
    
    //update db
    res.json({
        message : "User updated successfully"
    })
})