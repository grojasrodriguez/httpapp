const http=require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        "content-type": "text/html",
    });
    res.end("<h1>Hello World from Wake Tech Community Collega</h1>");
});

server.listen(8080, () => {
    console.log("Listening to requests on Port 8080");
});