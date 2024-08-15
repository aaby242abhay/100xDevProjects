
export function GET(req : Request){
    return  Response.json({
        "email" : "aaby242abhay@gmail.com",
        "name" : "Aaby Abhay"
    })
}
export function POST(req : Request){
    return Response.json({
        message : "This is the post handle in nextJs"
    })
}