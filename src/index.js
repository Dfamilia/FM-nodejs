const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.method === "GET" && req.url === "/"){
        console.log("Hello from server to console")
        res.write("Hola mundo");
        res.end();
    }

});

const port = 3535;
const hostName = "localhost";

server.listen(port, hostName, ()=>{
console.log(`Welcome to the console app, to get a web access click Http://${hostName}:${port}`);
});