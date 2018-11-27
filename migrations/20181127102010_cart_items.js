exports.up = function (knex, Promise) {
    return knex.schema.createTable('cart_items', table => {
        table.increments('id').primary() //cart item id
        table.integer('beer_id')
        table.integer('cart_id') // reference looping 
        table.integer('quantity')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('cart_items')
};
