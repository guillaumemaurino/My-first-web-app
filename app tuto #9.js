// App tuto #9
var fs = require('fs');
var dirname = __dirname;
//console.log(dirname);
fs.readFile(dirname + '\\Hello buddy.txt' , 'utf8', function(err, data){
	console.log(data);
	fs.writeFile(dirname + '\\Hello buddy saved.txt', data);
});

console.log("test")
//fs.writeFileSync();