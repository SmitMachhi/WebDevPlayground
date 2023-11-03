import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {

    const whatDay = new Date;
    const day = whatDay.getDay();

    if (day <= 5) {
        res.render("/views/index.ejs", 
        {weekday: "It's a weekday!" } );
    }
    else{
        res.render("/views/index.ejs", 
        {weekend: "It's the weekend!"} )
    }

  });

app.listen(port, () => {
 console.log(`Listening on port ${port}`);
});