var appRouter = function(app) {

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
        "shuttleID": "123",
        "riderName": req.query.riderName,
        "shuttleDate" : req.query.date,
        }
        return res.send({"result" : "passed"});
    }
});

app.get("/Read", function(req, res) {
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
 
}
 
module.exports = appRouter;
