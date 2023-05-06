const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const app = express()

//init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

//init db

//init routers
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello'
    })
})
//handle errors
module.exports = app