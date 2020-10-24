const routes = require("./src/routes");
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
app.use('/',routes)
app.use('/', serveStatic(path.join(__dirname, '/dist')))
const port = process.env.PORT || 8080
app.listen(port)