import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import {dirname} from "path"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const fN = req.body["fName"];
  const lN = req.body["lName"];
  const total = fN.length + lN.length;

  res.render(__dirname + "/views/index.ejs", { check: total, });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
