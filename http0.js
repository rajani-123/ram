var http = require("http");

var server = http.createServer(function(req, res){
	res.write("Hello");
	res.end();
});
console.log("HTTP Server instance is created");

server.listen("3000", function(){
	console.log("My HTTP server is running on port 3333");
});