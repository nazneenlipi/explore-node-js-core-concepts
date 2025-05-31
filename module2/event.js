const EventEmitter = require("node:events");

class LipisCoaching extends EventEmitter{}

const lipisCoaching = new LipisCoaching()
// eikhane ekta event name ekta parameter ase , and ekta callback function
// on holo eikhane listner er kaj kore 
lipisCoaching.on('bell', ()=>{
    console.log("Class starting bell")
})
lipisCoaching.on('bell', ()=>{
    console.log("Class ending bell and new class start")
})
lipisCoaching.on('last hour', ()=>{
    console.log("Wow now its time to left the class and jumping")
})

lipisCoaching.emit('bell')
lipisCoaching.emit('last hour')