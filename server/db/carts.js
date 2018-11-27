const db = require('./connection')

function getCart(id) {
    const cartDetails = {}
    return db('cart_items').join('beers', 'cart_items.beer_id', 'beers.id').where('cart_items.cart_id', id)
        .then(cartItems => {
            cartDetails.items = cartItems.map(cartItem => {
                return {
                    beer: {
                        id: cartItem.beer_id,
                        name: cartItem.name,
                        brewery: cartItem.brewery,
                        country: cartItem.country,
                        style: cartItem.style,
                        abv: cartItem.abv
                    },
                    quantity: cartItem.quantity
                }
            })
            return cartDetails
        })
}


function createCart() {
    return db('carts').insert()
}

function addToCart(beerId, cartId, quantity) {
    return db('cart_items').where('beer_id', beerId).where('cart_id', cartId).first()
        .then(existingCartItem => {
            if (!existingCartItem) {
                return db('cart_items').insert({
                    cart_id: cartId,
                    beer_id: beerId,
                    quantity: 0
                })
            } else {
                return [existingCartItem.id]
            }
        })
        .then(existingCartIds => {
            return db('cart_items').where('id', existingCartIds[0]).first()
        })

        .then(existingCartItem => {
            return db('cart_items').update({
                quantity: existingCartItem.quantity + quantity
            })
        })

}

module.exports = {
    getCart,
    createCart,
    addToCart
}