var events = require('events');
var util = require('util');

var Persone = function(name){
	this.name = name;
};

util.inherits(Persone, events.EventEmitter);

var james = new Persone('james');
var mary = new Persone('mary');
var ryo = new Persone('ryo');

var people = [james, mary, ryo];
people.forEach(function(Persone){
	Persone.on('speak', function(mssg){
		console.log(Persone.name + " just said :" + mssg);
	})
})

james.emit('speak' , " hey buddy")