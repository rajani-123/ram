var exp = require('express');
var app = exp();

app.get('/', function(req, res){
	res.send("Hello expresss");
});

app.listen(3000, function(){
	console.log('server is running on port 3000');
});