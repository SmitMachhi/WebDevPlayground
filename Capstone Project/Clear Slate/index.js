import express from "express";
import { fileURLToPath } from "url";
import {dirname} from "path"
import bodyParser from "body-parser";

const app = express();

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs");
  });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  