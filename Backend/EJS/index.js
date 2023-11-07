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
    
    if (day === 0 || day === 6) {
        res.render(__dirname + "/views/index.ejs", 
        {dayType: "weekday,", advise: "time to make some money!" } );
    }
    else{
        res.render(__dirname + "/views/index.ejs",
        {dayType: "weekend,", advise: "time to work on the side hustle!"} )
    }

  });

app.listen(port, () => {
 console.log(`Listening on port ${port}`);
});