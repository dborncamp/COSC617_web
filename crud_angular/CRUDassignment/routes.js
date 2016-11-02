var appRouter = function(app) {

newShuttle = '';

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/slide6', function (req, res) {
  res.render('slide6', { title: 'slide6'});
});

app.get('/slide8', function (req, res) {
  res.render('slide8', { title: 'slide8'});
});

app.get('/slide9', function (req, res) {
  res.render('slide9', { title: 'slide9'});
});

app.get('/slide10', function (req, res) {
  res.render('slide10', { title: 'slide10'});
});

app.get('/slide11', function (req, res) {
  res.render('slide11', { title: 'slide11'});
});

app.get('/slide12', function (req, res) {
  res.render('slide12', { title: 'slide12'});
});

app.get('/slide13', function (req, res) {
  res.render('slide13', { title: 'slide13'});
});

app.get('/slide14', function (req, res) {
  res.render('slide14', { title: 'slide14'});
});

app.get('/slide15', function (req, res) {
  res.render('slide15', { title: 'slide15'});
});

app.get('/slide16', function (req, res) {
  res.render('slide16', { title: 'slide16'});
});

app.get("/Create", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.riderName) {
        return res.send({"status": "error", "message": "missing rider Name"});
    } else {
    var shuttle = {
        "id" : "123",
        "title" : "test 1",
        "start" : "2016-10-12T11:00:00",
        "end" : "2016-10-12T11:30:00",
        "allDay" : ""
    }
        return res.send({"result" : "passed"});
    }
});

app.get("/Read", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var shuttle = {
        "id" : "123",
        "title" : "test 1",
        "start" : "2016-10-12T11:00:00",
        "end" : "2016-10-12T11:30:00",
        "allDay" : ""
    }
    if(!req.query.id) {
        return res.send({"status": "error", "message": "missing shuttleID"});
    } else if(req.query.id != shuttle.id){
        return res.send({"status": "error", "message": "wrong shuttleID"});
    } else {
        return res.send(shuttle);
    }

});

app.get("/Update", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var shuttle = {
	"shuttleID": "123",
	"riderName": "Dave",
	"shuttleDate" : "2016-10-15",
	}
    if(!req.query.shuttleID) {
        return res.send({"status": "error", "message": "missing shuttleID"});
    } else if(req.query.shuttleID != shuttle.shuttleID) {
        return res.send({"status": "error", "message": "wrong shuttleID"});
    } else { // its good
        shuttle.riderName = req.query.riderName;
        shuttle.shuttleDate = req.query.shuttleDate;
        return res.send(shuttle)
    }
});

app.get("/Delete", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var shuttle = {
	"shuttleID": "123",
	"riderName": "Dave",
	"shuttleDate" : "2016-10-15",
	}
    if(!req.query.shuttleID) {
        return res.send({"status": "error", "message": "missing shuttleID"});
    } else if(req.query.shuttleID != shuttle.shuttleID) {
        return res.send({"status": "error", "message": "wrong shuttleID"});
    } else { // its good
        delete shuttle;
        return res.send({"status":"Deleted"});
    }
});

app.get("/hello", function(req, res) {
    res.send("Hello World");
});

app.get("/account", function(req, res) {
    var accountMock = {
        "username": "test",
        "password": "1234",
        "twitter": "@test"
    }
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});


app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});

app.post("/CreateEvent", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(!req.body.id){
        return res.send({'status': 'error', 'message':'Missing an ID'});
    } else {
        newShuttle = {
            "id" : req.body.shuttleID,
            "title" : req.body.title,
            "start" : req.body.start,
            "end" : req.body.end
        };
        console.log(newShuttle);
        return res.send({"status":"Success!"});
    }
});

app.get("/newShuttle", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(newShuttle);
    return res.send(newShuttle);
});


app.get("/ReadAll", function(req, res){
    /*
     * Calendar event should have the fields:
     *  id, title, start, end, allday
     *
     *  start and end format should be:
     *      YYYY-MM-DDTHH:MM:SS
     *      on a 24 hour clock
     */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var allShuttles = [
        {
            "id" : "123",
            "title" : "test 1",
            "start" : "2016-10-12T14:30:00",
            "end" : "2016-10-12T15:30:00",
            "allDay" : ""
        },
        {
            "id" : "456",
            "title" : "test 2",
            "start" : "2016-10-12T16:30:00",
            "end" : "2016-10-12T17:30:00",
            "allDay" : ""
        },
        {
            "id" : "789",
            "title" : "test 3",
            "start" : "2016-10-12T12:00:00",
            "end" : "2016-10-12T13:00:00",
            "allDay" : ""
        }

        ];

    return res.send(allShuttles);

});
 
}
 
module.exports = appRouter;
