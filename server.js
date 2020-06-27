/* This express server created for contiues integration on heroku */
const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/Smart-Cargo-Web'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/Smart-Cargo-Web/index.html'));
});
ngApp.listen(process.env.PORT || 8080);
