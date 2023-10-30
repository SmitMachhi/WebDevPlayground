import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    //res.send('<link rel="stylesheet" href="style.css">');
    res.send("<h1>Wassssssssup broootha!</h1>");
})

app.get("/about", (req, res)=> {
    res.send("<h2>One thing about me: </h2><br><h1>I'm awesome!</h1>");
})

app.get("/contact", (req, res)=> {
    res.send("<h2>221b Baker Street, London</h2>");
})

app.listen(port, ()=> {
    console.log("Server running @ port " + port);
})