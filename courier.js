/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('courier'); // -> 'a thing'
 */
 var courierAction = require('courierAction');
var say = require('creepSay');
var assign = require('assignment');

module.exports = function(creep){
	//get state
	//var state  = creep.memory.state;
	//say(creep, state);
	
	var assignment = assign(creep);
    //console.log(assignment);
	var source = Game.getObjectById(assignment);
	//console.log(source);
	
	courierAction(creep, source);
		
	
	
}