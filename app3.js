var exp = require('express');
var app = exp();

app.get("/", function(req, res){
    res.write("Hi ");
    res.write("You hit the root path");
    res.end();
});

app.get("/aboutus", function(req, res){
    res.write("This is aboutus page ");
    res.end();
});

app.get("/home", function(req, res){
    res.write("<HTML><body><h3> Home Page</h3></body></html>");
    res.end();
});

app.listen(3000, function(){
    console.log("Http server is running on port 3000");
});
