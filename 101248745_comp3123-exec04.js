var express = require("express")
var querystring = require("querystring")
let app = express()
const sp=8088

//http://localhost:8088/
app.get("/",(req,res)=>{
    res.send("<h1>get-Welcome to The lab 4 exercise</h1>")
})
//http://localhost:8088/hello
app.get("/hello",(req,res)=>{
    res.send("<h1>Hello Express JS</h1>")
})
//http://localhost:8088/user?firstname=Mitesh&lastname=Mistry
app.get("/user",(req,res)=>{
    res.send(JSON.stringify(req.query))
})
//http://localhost:8088/user/Mitesh/Mistry
app.post("/user/:fnm/:lnm",(req,res)=>{
    res.json(req.params)
})
app.listen(sp,()=>{
    console.log("server running at http://localhost:%s",sp)
})