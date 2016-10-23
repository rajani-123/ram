var exp = require("express");
var app = exp();

//setting up a publically accessible static content folder
app.use(exp.static(__dirname + "/public"));

app.get('/', function(req, res){
	res.write("You ht the root path");
	res.end();
});


app.get('/data', function(req, res){
	res.write("<HTML>");
	res.write("<body>");
	res.write("<h1>");
	res.write("HTTP GET parameters (named) were obtained at server" );
	res.write("</h1>");
	res.write("<h4>");
	res.write("Name entered in the form was = " + req.query.nm);
	res.write("/h4>");
	res.write("<h4>");
	res.write("Country entered in the form was = " + req.query.country);
	res.write("</h4>");
	res.write("</body>");
	res.write("</HTML>");
	res.end();

	console.log(" Received a GET request");
});

var port = 3000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});