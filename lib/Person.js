var EventEmitter = require('events').EventEmitter;

var util = require('util'); //utilities module

var Person = function(name) {

    this.name = name;

};

//Person object inherits from the EventEmitter

util.inherits(Person, EventEmitter);

