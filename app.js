var express = require('express');
var app = express(); // Initialising express to use its methods such as listening method


app.set('port',3000);//Explicitly stating that the app listens on port 300

var server = app.listen(app.get('port'),function () {
    var port = server.address().port;
    console.log("Connected on port "+ port);
});

