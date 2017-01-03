// App tuto #9
var fs = require('fs');
var dirname = __dirname;
console.log(dirname);
fs.mkdir('stuff' , function(){
	console.log('folder created');
	fs.readFile('Hello Buddy.txt' , 'utf8' , function(err , data){
		console.log(data);
		fs.writeFile('./stuff/writefile.txt' , data);
	})
}); 
console.log('removing');

setTimeout(function(){
    console.log("Three seconds \n have passed!");

},3000);

fs.unlink('./stuff/writefile.txt' , function(){
	console.log('removing text file')
	fs.rmdir('stuff' , function(){
		console.log('folder removed')
	});
})