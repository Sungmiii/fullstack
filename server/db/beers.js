const db = require('./connection')

function getBeers() {
    return db('beers').select()
}

module.exports = {
    getBeers
}