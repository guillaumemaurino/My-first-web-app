var counter = function(arr){
	return "there are " + arr.length + " elements in this array";
};

var adder = function(a,b){
	return `the result is ${a+b}`;
}

var counter 
var pi = 3.14;

//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = pi;

module.exports = {
	counter : counter,
	adder : adder,
	pi : pi	
}