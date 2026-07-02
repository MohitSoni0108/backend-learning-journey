// Import HTTP module.
const http = require("http");

// Create a server object.
const server = http.createServer((req, res) => {
 
   console.log(req.url);

   res.end("Hello");

});



//starting the server 
server.listen(3000, () => {
  console.log("Server running on port 3000");
});