// routes.js

let cityData = require("../data/city.list.json");

module.exports = function(app, db) {
  app.get("/cities/:query", (request, response) => {

    const queryString = request.params.query;
    const details = { 'query': request.params.query };

    console.log('​module.exports -> details', details);
    console.log('​module.exports -> queryString', queryString);
    let possibleCities = [];
    let counter = 0;
    let limit = 10;

    cityData.forEach(function(city) {
      if(counter < limit){
      if (city.name.toUpperCase().includes(details.query.toUpperCase())) {
        possibleCities.push(city);
        counter++;
      }
    }
    });

    response.json(possibleCities);
  });
};
