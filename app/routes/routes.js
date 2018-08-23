// routes.js

module.exports = function(app, db) {
    app.get('/cities', (request, response) => {
        //Logic goes here
        response.send("Response being output")
    });
}

