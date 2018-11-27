const express = require('express')
const router = express.Router()

const beersDb = require('../db/beers')

router.get('/', (req, res) => {
    return beersDb.getBeers()
        .then(beers => {
            res.json(beers)
        })
})

module.exports = router