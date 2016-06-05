var exp = require("express");
var app = exp();

app.get('/player', function(req, res){
	
	console.log("query value" + JSON.stringify(req.query));  //
	res.write("name=" + req.query.name);
	res.end("   lang=" + req.query.lang);
	
});
var port = process.env.PORT || 4000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});