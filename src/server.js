const appLoader = require('./loaders');
const config = require('./config/config');

function startServer() {

    const app = appLoader();

    // Initialize the app.
    let server = app.listen(config.port, function () {
        let port = server.address().port;
        console.log("App now running on port", port);
    });
}

startServer();

