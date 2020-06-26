const express = require('express');
          app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
});
app.get("/feedback", function(req, res){
    res.render("feedback");
});
app.get("/designs", function(req, res){
    res.render("designs");
});
app.get("/gallery", function(req, res){
    res.render("gallery");
});
app.get("/getintouch", function(req, res){
    res.render("getintouch");
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});