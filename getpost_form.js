var exp = require("express");
var app = exp();
var bodyparser = require('body-parser');

//setting up a publically accessible static content folder
app.use(exp.static(__dirname + "/public"));

//setting up the body parser for extracting post parameters
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.get('/data', function(req, res){
	console.log(" Received a GET request");

	res.write("<HTML>");
	res.write("<body>");
	res.write("<h1>");
	res.write("HTTP GET parameters (named) were obtained at server" );
	res.write("</h1>");
	res.write("<h4>");
	res.write("Name entered in the form was = " + req.query.nm);
	res.write("</h4>");
	res.write("<h4>");
	res.write("Country entered in the form was = " + req.query.country);
	res.write("</h4>");
	res.write("</body>");
	res.write("</HTML>");
	res.end();	
});

app.post('/data', function(req, res){
	console.log(" Received a POST request");
	res.write("<HTML>");
	res.write("<body>");
	res.write("<h1>");
	res.write("HTTP POST parameters were obtained at server" );
	res.write("</h1>");
	res.write("<h4>");
	res.write("Name entered in the form was = " + req.body.nm);
	res.write("</h4>");
	res.write("<h4>");
	res.write("Country entered in the form was = " + req.body.country);
	res.write("</h4>");
	res.write("<a href='/'>Back to Form</a>");
	res.write("</body>");
	res.write("</HTML>");
	res.end();
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});