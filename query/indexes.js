//Use this file to define indexes for your queries
db.restaurants.createIndex({ name: 1 });
db.restaurants.createIndex({ borough: 1 });
db.restaurants.createIndex({ "grades.score": 1 });
db.restaurants.createIndex({ "location.coordinates.0": 1 });
db.restaurant.createIndex( { "location.coordinates.0": 1 }, { partialFilterExpression: {  cuisine: "American", "grades.score": {$gt: 70}, "location.coordinates.0": {$lt: -65.754168} } } )
