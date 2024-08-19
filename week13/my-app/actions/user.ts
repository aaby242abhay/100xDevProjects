"use server"
//Do not send this to the client

import client from "@/db"

export default async function serverAction(email : string, password : string){
    try{
        await client.user.create({
            data : {
                username : email,
                password : password
            }
        })
        return "success";
    }catch(e){
        console.log(e);
        return "error";
    }
}