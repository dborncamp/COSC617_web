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
    if(!req.query.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
    var student = {
        "StudentID": "123",
        "StudentName": req.query.studentName,
        "StudentSSN" : req.query.studentSSN,
        "StudentEmail" : req.query.studentEmail,
        "StudentPhone" : req.query.studentPhone
        }
        return res.send({"result" : "passed"});
    }
});

app.get("/Read", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var student = {
	"StudentID": "123",
	"StudentName": "Joe Oakes",
	"StudentSSN" : "5563334444",
	"StudentEmail" : "joe.oakes@psu.edu",
	"StudentPhone" : "2157778888"
	}
    if(!req.query.studentID) {
        return res.send({"status": "error", "message": "missing studentID"});
    } else if(req.query.studentID != student.StudentID) {
        return res.send({"status": "error", "message": "wrong studentID"});
    } else {
        return res.send(student);
    }

});

app.get("/Update", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World");
});

app.get("/Delete", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World");
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

