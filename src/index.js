const app = require('./server');

const port = 3535;
const hostName = "localhost";

app.listen(port, hostName, ()=>{
console.log(`Welcome express terminal, server on Http://${hostName}:${port}`);
});