const express = require('express')
const serveStatic = require('serve-static')
const routes = require('./src/routes')
const app = express()
app.use(routes)
const port = process.env.PORT || 8080
app.listen(port)