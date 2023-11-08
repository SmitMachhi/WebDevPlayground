import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import {dirname} from "path"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    fT: "",
    title: "Enter Your Name:",
    bT: "",
  });
});

app.post("/submit", (req, res) => {
  var fN = req.body["fName"];
  var lN = req.body["lName"];
  var out = fN.length + lN.length;

  res.render(__dirname + "/views/index.ejs", {
    fT: "There Are ",
    title: out,
    bT: "Letter In Your Name."
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
