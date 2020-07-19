const express = require('express');
const loaders = require('./loaders');
const config = require('./config/config');


async function startServer() {
    const app = express();
    await loaders(app);

    // Initialize the app.
    let server = app.listen(config.port, function () {
        let port = server.address().port;
        console.log("App now running on port", port);
    });
}

startServer();

