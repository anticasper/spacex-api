const express = require('express')
const app = express()
const setupRoutes = require('./config/setupRoutes')

const cors = require('cors')
const helmet = require('helmet')

app.use(cors())
app.use(helmet())

setupRoutes(app)

module.exports = app
