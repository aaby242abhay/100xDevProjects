import { NextRequest } from "next/server"

import client from "@/db"

export function GET(req : Request){
    return  Response.json({
        "email" : "aaby242abhay@gmail.com",
        "name" : "Aaby Abhay"
    })
}
export async function POST(req : NextRequest){
    const body = await req.json();
    console.log(body);
    await client.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    })
    return Response.json({
        message : "This is the post handle in nextJs"
    })
}