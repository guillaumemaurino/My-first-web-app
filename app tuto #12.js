var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hey ninjas');
	console.log('request was made ' + req.url);
});

server.listen(3000, '127.0.0.1');
console.log('yoda listening to port 3000');