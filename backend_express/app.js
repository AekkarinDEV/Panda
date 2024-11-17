const express = require("express");
const app = express();
const URL = process.env.URL;
const bodyParser = require("body-parser")
const auth = require("./routes/auth")
const content = require("./routes/content")


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/auth" , auth);
app.use("/content" , content);

app.listen(URL, (console.log("run on " + URL)));
