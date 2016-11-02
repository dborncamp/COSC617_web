var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({origin: 'null'}));
 
var routes = require("./routes/routes.js")(app);

app.set('view engine', 'pug');
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});


