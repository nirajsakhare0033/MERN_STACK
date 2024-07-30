import http from "http";

const server = http.createServer((req, res ) => {
  //console.log(req.url)
  // ./homepage
  if (req.url === "/") {
    res.end("<button>Home section 🏠🏠</button>");
  }

  // ./about
  else if(req.url === '/about'){
    res.end("<button>about section... !!!</button>")
  }
  // ./contact:id
  else if(req.url === '/contact'){
    res.end("<button>contact section </button>");
  }
  // ./product?quary
  else if (req.url === '/product'){
    res.end("<button>product sections...</button>")
  }
  else {
    res.end("<button>404 page not found</button>")
  }
})
server.listen(1000, () => {
  console.log("server up ...!!!")
})