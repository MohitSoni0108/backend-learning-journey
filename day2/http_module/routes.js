const http = require("http");

const server = http.createServer((req, res) => {
console.log(req.url);
  if(req.url === "/"){
        
    res.end("Home Page");
  }

  else if(req.url === "/about"){
    res.end("About Page");
  }

  else if(req.url === "/contact"){
    res.end("Contact Page");
  }

  else{
    res.statusCode = 404;
    res.end("Page Not Found");
  }

});

server.listen(3000);