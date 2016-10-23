var exp = require("express");
var app = exp();

app.get('/player', function(req, res){
	res.write(" The following HTTP GET request parameters(named) were obtained at server" );
	res.write(" Name=" + req.query.name );
	res.write(" Place=" + req.query.place );
	res.write(" Language=" + req.query.lang);
	res.end();
});

var port = 3000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});