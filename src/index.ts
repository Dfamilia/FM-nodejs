// const app = require('./server');
import app from "./server";

const port = 3535;
const hostName = "localhost";

app.listen(port, hostName, ()=>{
console.log(`Welcome express terminal, server on Http://${hostName}:${port}`);
});