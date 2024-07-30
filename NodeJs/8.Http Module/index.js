

import http from 'http'
const server = http.createServer((req, res) => {
  console.log(req);
  res.write("<h1>hello world...!!!</h1>")
});

server.listen(1000, () => console.log("Server up!"));