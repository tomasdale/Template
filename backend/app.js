const express = require("express");
const path = require("path");


const app = express();
const hostname = "127.0.0.1";
const port = 8080;
const dir = "/../frontend/";

app.use(express.static(path.join(__dirname + dir, "build")));

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname + dir, "build", "index.html"));
});

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.listen(port);
