const express = require('express')
const path = require('path')
const server = express()

const BeerRoutes = require('./routes/beers')
const CartRoutes = require('./routes/carts')

server.use(express.static(path.join(__dirname + '../public')))
server.use(express.json())

server.use('/api/v1/beers', BeerRoutes)
server.use('/api/v1/carts', CartRoutes)

module.exports = server