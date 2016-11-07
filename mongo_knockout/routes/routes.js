var appRouter = function(app) {

app.get("/Create", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");
        //console.log(req.query);
    if(!req.query.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
        //console.log(req.query.studentID);
    var student = {
        "StudentID": req.query.studentID,
        "StudentName": req.query.studentName,
        "StudentSSN" : req.query.studentSSN,
        "StudentEmail" : req.query.studentEmail,
        "StudentPhone" : req.query.studentPhone
        } //Close student
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
	  collection.insert(student); 
          db.close();
          return res.send({"result" : "passed"});
         }  //close if
        }); //close function
    } //close else
}); //Close app.get

app.get("/Read", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentID) {
        return res.send({"status": "error", "message": "missing studentID"});
    } else {
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
            collection.find({"StudentID" : req.query.studentID}).toArray(function(error, students){
            db.close();
            return res.send(students);
          });
         } //close else
       }); //close function
    } //close else
});//Close app.get

app.get("/Update", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
    var student = {
        "StudentID": req.query.studentID,
        "StudentName": req.query.studentName,
        "StudentSSN" : req.query.studentSSN,
        "StudentEmail" : req.query.studentEmail,
        "StudentPhone" : req.query.studentPhone
        } //Close student
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
          collection.update({"StudentID" : req.query.studentID}, student);
          db.close();
          return res.send({"result" : "passed"});
         }  //close if
        }); //close function
    } //close else
});

app.get("/Delete", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentID) {
        return res.send({"status": "error", "message": "missing studentID"});
    } else {
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
            collection.remove({"StudentID" : req.query.studentID})
            db.close();
            return res.send({"result" : "passed"});
         } //close else
       }); //close function
    } //close else
});

app.get("/hello", function(req, res) {
    res.send("Hello World");
});

app.get("/ReadAll", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
    res.header("Access-Control-Allow-Origin", "*");
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
            collection.find().toArray(function(error, students){
            db.close();
            return res.send(students);
          });
         } //close else
    }); //close else
});//Close app.get

app.post("/CreateStudent", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  if(!req.body.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
    var student = {
        "StudentID": req.body.studentID,
        "StudentName": req.body.studentName,
        "StudentSSN" : req.body.studentSSN,
        "StudentEmail" : req.body.studentEmail,
        "StudentPhone" : req.body.studentPhone
        } //Close student
        console.log(student);
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
          collection.insert(student);
          db.close();
          return res.send({"result" : "passed"});
         }  //close if
        }); //close function
    } //close else
}); //Close app.get

app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
 
}
 
module.exports = appRouter;

