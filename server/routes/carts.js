const express = require('express')
const router = express.Router()


const cartsDb = require('../db/carts')

router.get('/:id', (req, res) => {
    return cartsDb.getCart(req.params.id)
        .then(carts => {
            res.json(carts)
        })
})

router.post('/', (req, res) => {
    return cartsDb.createCart()
        .then(cartIds => {
            res.json({ cartId: cartIds[0] })
        })
})

router.post('/:id/items', (req, res) => {
    const cartId = req.params.id
    const beerId = req.body.beerId
    const quantity = 1

    return cartsDb.addToCart(cartId, beerId, quantity)
        .then(() => {
            return res.json({ cartId: cartId })
        })
})
module.exports = router