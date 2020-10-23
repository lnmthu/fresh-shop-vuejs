const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const routes = require("./src/routes");

app.use('/',routes)
app.use('/', serveStatic(path.join(__dirname, '/dist')))
if (process.env.NODE_ENV === "production"){
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }
const port = process.env.PORT || 8080
app.listen(port)
