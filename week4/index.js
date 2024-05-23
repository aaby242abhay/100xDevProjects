const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());
app.use(express.json())
app.get("/getSum", (req, res) =>{
    const a = parseInt(req.headers.a);
    const b = parseInt(req.headers.b);
    const sum = a+b;

    res.status(200).json({
        sum : sum
    })
})

app.post("/getSI", (req,res)=>{
    const p = req.body.p;
    const r = req.body.r;
    const t = req.body.t;

    const SI = (p*r*t)/100;
    res.status(200).json({
        simpleInterest : SI
    })
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})