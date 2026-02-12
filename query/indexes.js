//Use this file to define indexes for your queries
db.restaurants.createIndex({ name: 1 });
db.restaurants.createIndex({ borough: 1 });
db.restaurants.createIndex({ "grades.score": 1 });
db.restaurants.createIndex({ "location.coordinates.0": 1 });
db.restaurants.createIndex( { "location.coordinates.0": 1 }, { name: "score_and_coordinates" , partialFilterExpression: { "grades.score": {$gt: 70}, "location.coordinates.0": {$lt: -65.754168} } } )
db.restaurants.createIndex( {cuisine: -1}, { name: "filter_by_grade", partialFilterExpression:{"grades.grade": "A"} } );
db.restaurants.createIndex( {name: 1}, { name: "filtered_by_wil", partialFilterExpression: {name: {$gte: "Wil", $lte: "Wim"}}});
db.restaurants.createIndex({name: 1})
db.restaurants.createIndex({ borough: 1}, {name: "filtered_by_borough_and_cuisine", partialFilterExpression: {borough: "Bronx", cuisine:{$in: ["American", "Chinese"]} } })
