Beer API

GET /api/v1/beers
Request Body:
{}


Response Body:
[
  {
    id: 1,
    name: 'HBIB Ginger Fusion',
    brewery: 'Hawkes Bay Independent Brewery',
    country: 'New Zealand',
    style: 'Ginger Beer',
    abv: '5%'
  }, {
    id: 2,
    name: 'Mangose & Melons',
    brewery: 'Baylands Brewery',
    country: 'New Zealand',
    style: 'Fruit Gose',
    abv: '4%'
  }
]

GET /api/v1/carts/:id

Request Body:
{}

Response Body:
{
  items: [{
    beer: {
      id: 1,
      name: 'HBIB Ginger Fusion',
      brewery: 'Hawkes Bay Independent Brewery',
      country: 'New Zealand',
      style: 'Ginger Beer',
      abv: '5%'
    },
    quantity: 2
  }]
}


POST /api/v1/carts

Request Body:
{}

Response Body:
{
  cartId: 4
}



POST /api/v1/carts/:id/items

Request Body:
{
  beerId: 4
}


Response Body:
{}