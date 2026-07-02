const http = require("http");
const EventEmitter = require("events");
const emitter = new EventEmitter();
//listerns execute 
emitter.on("requestReceived", (req) => {
    console.log(`Route Visited: ${req.url}`);
});

//request counter 
let requestCount = 0;
//counter listner 
emitter.on("requestReceived", () => {
    requestCount++;

    console.log(`Total Requests: ${requestCount}`);
});


const server = http.createServer((req, res) => {
//emitter emit 

emitter.emit("requestReceived", req);

res.end("Done");

});

server.listen(3000, () => {
    console.log("Server Running on Port 3000");
});

//bascially our server has this potential that we should log the details on the server 
//request on the server'

console.log(process);