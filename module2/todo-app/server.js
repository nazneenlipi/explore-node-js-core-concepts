const http = require("http")
const path = require("path")
const fs = require("fs")

const filePath = path.join(__dirname,"./db/todo.json")

const server = http.createServer((req,res)=>{
    if(req.url === "/todos" && req.method === "GET"){
        const data = fs.readFileSync(filePath , {encoding : "utf-8"})

        res.writeHead(200, {
            "content-type":"application/json",
        })

        res.end(
            data
        )
        
    }else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("Todo created")
    }else{
    res.end("Route not found")
    }
   
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Server is running")
})