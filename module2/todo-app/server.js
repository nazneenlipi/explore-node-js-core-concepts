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
// create a todo 
    }else if(req.url === "/todos/create-todo" && req.method === "POST"){
        let data = ""

        req.on("data", (chunk)=>{
            data = data + chunk
        })

        req.on("end", ()=>{
            // 1.distracture
            const {title, body} = JSON.parse(data)
            const createdAt = new Date().toLocaleString()
            // 2. file read and parse 
            const allTodos = fs.readFileSync(filePath,{encoding:"utf-8"})
            const parsedData = JSON.parse(allTodos)
            console.log(allTodos)
            
            // data push
            parsedData.push({title,body,createdAt})

            fs.writeFileSync(filePath,  JSON.stringify(parsedData), {encoding:"utf-8"})

            res.end(JSON.stringify({title,body,createdAt}))
        })


    }else{
    res.end("Route not found")
    }
   
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Server is running")
})