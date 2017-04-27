/**
 * Created by TomGoldberg on 27/04/2017.
 */

/*
 default settings
 */
const http = require('http'),
    express = require('express'),
    app = express(),
    controller = require('./controller.js'),
    port = process.env.PORT || 3000;

/*
 All routes
 */
app.get('/', controller.init);

app.listen(port);

console.log("listening on port " + port);