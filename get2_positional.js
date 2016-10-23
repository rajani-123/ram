var exp = require("express");
var app = exp();

app.get('/player/:name/:state/:nation/:lang', function(req, res){
	res.write(" The following HTTP GET request parameters(positional) were obtained at server" );
	res.write(" name=" + req.params.name);
	res.write(" State=" + req.params.state);
	res.write(" nation=" + req.params.nation);
	res.end(" lang=" + req.params.lang);
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});