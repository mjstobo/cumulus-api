// routes.js

let cityData = require("../data/city.list.json");

module.exports = function(app, db) {
  app.get("/cities/:query", (request, response) => {

    const queryString = request.params.query;
    const details = { 'query': request.params.query };

    console.log('​module.exports -> details', details);
    console.log('​module.exports -> queryString', queryString);

  const possibleCities = cityData.filter(city=> city.name.toUpperCase().startsWith(details.query.toUpperCase()));

  possibleCities.sort((a,b) => {
    let nameA = a.name;
    let nameB = b.name;

   return(nameA < nameB ?  -1 :
          nameA > nameB ?   1 :
                            0
        );
  });

    const returnedCities = possibleCities.slice(0,10);

    response.json(returnedCities);

  });
};
