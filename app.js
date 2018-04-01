var express = require('express'); // reuire express for the app
var app = express(); // Initialising express to use its methods such as listening method
var path  = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port',3000);//Explicitly stating that the app listens on port 300


//.use signifies the usage of middleware
app.use(function (req,res,next) {//
    console.log(req.method,req.url); //req.method is for checking if its a GET or POST req and then move to next step
    next();
});


app.use(express.static(path.join(__dirname,'public'))); // Express helps us define our public libraries, such as showing your html files

app.use(bodyParser.urlencoded({extended : false}));//We only need strings and arrays from the form body

app.use('/api',routes);



//To send a file as a response we use send method

var server = app.listen(app.get('port'),function () {
    var port = server.address().port;
    console.log("Connected on port "+ port);
});




