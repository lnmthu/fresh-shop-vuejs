const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
const port = process.env.PORT || 8080
app.listen(port)