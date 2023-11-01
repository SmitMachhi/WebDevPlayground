import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const outputData = req.body.street + " " + req.body.pet;
  res.send("<h2>Your Band Name is: </h2><br>" + "<h1>" + outputData + "✌️" + "</h1>");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
