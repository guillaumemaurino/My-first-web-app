// tuto 14
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('Hello buddy.txt' , 'utf8');
var myWriteStream = fs.createWriteStream('Hello buddy saved.txt');

myReadStream.on('data' , function(chunk){
	console.log('new chunk received');
	//console.log(chunk);
	myWriteStream.write(chunk);
});