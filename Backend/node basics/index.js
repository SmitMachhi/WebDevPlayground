const fs = require("node:fs");

fs.writeFile("message.txt", "Wasssssup Node!", (err) => {
    if (err) throw err;
    console.log("file has been saved!");
});