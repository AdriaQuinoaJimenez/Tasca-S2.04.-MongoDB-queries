//Use this file to define indexes for your queries
db.restaurants.createIndex({ name: 1 });
db.restaurants.createIndex({ borough: 1 });
db.restaurants.createIndex({ "grades.score": 1 });
db.restaurants.createIndex({ "location.coordinates.0": 1 });
db.restaurants.createIndex( { "location.coordinates.0": 1 }, { name: "score_and_coordinates" , partialFilterExpression: { "grades.score": {$gt: 70}, "location.coordinates.0": {$lt: -65.754168} } } )
db.restaurants.createIndex( {cuisine: -1}, { name: "filter_by_grade", partialFilterExpression:{"grades.grade": "A"} } );
db.restaurants.createIndex( {name: 1}, { name: "filtered_by_wil", partialFilterExpression: {name: {$gte: "Wil", $lte: "Wim"}}});
db.restaurants.createIndex({name: 1});
db.restaurants.createIndex({ borough: 1}, {name: "filtered_by_borough_and_cuisine", partialFilterExpression: {borough: "Bronx", cuisine:{$in: ["American", "Chinese"]} } });
db.restaurants.createIndex({borough: 1}, {name: "filtered_by_borough", partialFilterExpression: {borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } } });
db.restaurants.createIndex({"grades.score": 1}, {name: "filtered_by_score", partialFilterExpression: {"grades.score" : {$lte: 10} } });
db.restaurants.createIndex({ cuisine: 1 });
db.restaurants.createIndex({"grades.grade": 1}, {name: "filtered_by_score_and_score_isodate", partialFilterExpression: {"grades.grade": "A", "grades.score": 11, "grades.date": ISODate("2014-08-11T00:00:00.000Z")} })
