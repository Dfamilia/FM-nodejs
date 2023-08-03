// const express = require("express"); == js
// const path = require("path"); == js
import express from "express";
import path from "path";

const app = express();
// app.use(express.static("static"));

app.get('/', (req, res)=>{
res.status(200);
res.sendFile(path.resolve("./src/pages/index.html"));
});

app.get('/greetings',(req, res)=>{
console.log("Hello express from server");
res.status(200)
res.json({greetings: "Hello Mundo!!!"});
});

// module.exports = app; == js
export default app;