import http from 'http'

const server = http.createServer((req,res) => {
  if(req.url === "/"){
    res.writeHead(201, "OK", {"content-type":"text/html"});
    res.write("<h1>Home Section....</h1> <button>CLICK ME>>>!</button>")
  } else {
    res.writeHead(404, "BAD", {"content-type":"text/html"})
    res.write("<h1>404 page not found</h1>")
  }
})

server.listen(1000, ()=> {
  console.log("server listing on port 1000")
})