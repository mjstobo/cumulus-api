// routes.js

let cityData = require("../data/city.list.json");

module.exports = function(app, db) {
  app.get("/cities/:query", (request, response) => {

    const queryString = request.params.query;
    const details = { 'query': request.params.query };

    console.log('​module.exports -> details', details);
    console.log('​module.exports -> queryString', queryString);
    let currCity = "";

    cityData.forEach(function(city) {
      if (city.name == details.query) {
        currCity = city;
      }
    });

    response.json(currCity);
  });
};
