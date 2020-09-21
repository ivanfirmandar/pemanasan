let express = require("express");
let path = require("path");
let app = express();

app.get(/^(.+)$/, middleware);
app.listen(3000);

function middleware(req, res, next) {
    res.send(`<h1>This is ${path.basename(req.url)} Page</h1>`);
}