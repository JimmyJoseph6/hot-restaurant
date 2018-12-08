var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


var atTable= [
    {
    name: "Anthony",
    phone: "2017419462",
    email: "Anthony@random.com",
    id: "19"
    },
 
    {
    name: "Leigh",
    phone: "9732182011",
    email: "Leigh@random.com",
    id: "14"
    },
 
    {
    name: "Jimmy",
    phone: "2016969696",
    email: "Billy@random.com",
    id: "22"
    }
 ];


 var waiting= [
    {

    name: "Steve",
    phone: "666-666-6666",
    email: "Steve@Random.com",
    id: "17"

    }
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require(path.join(__dirname, 'table.js'))(app);
// require(path.join(__dirname, 'waitlist.js'))(app);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });


app.get("/add", function(req, res) {
res.sendFile(path.join(__dirname, "add.html"));
  });


  app.get("/api/tables", function(req, res) {
    return res.json(atTable);
  });


  app.get("/api/waitlist", function(req, res) {
    return res.json(waiting);
  });

// post to add to the array
  app.post("/api/tables", function(req, res) {

    var newTable= req.body;
    //
    // newFriend.routeName= newFriend.name.replace(/\s+/g, "").toLowerCase(); //this line adds a routeName

    console.log(newTable);

    atTable.push(newTable);

    res.json(newTable);
  });





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });