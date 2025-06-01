const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("Welcome to the todo app")
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Server is running")
})