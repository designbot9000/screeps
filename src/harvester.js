/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */
 
var mine = require('mine');
var say = require('creepSay');
var assign = require('assignment');

module.exports = function(creep){
	//get state
	//var state  = creep.memory.state;
	//say(creep, state);
	
	var assignment = assign(creep);

	var source = Game.getObjectById(assignment);
	
	if(creep.pos.inRangeTo(source, 1)){
	    //console.log("in range");
		mine(creep, source);
		
	}else {
		creep.moveTo(source);
		//say(creep, "I'm moving to " + sourcePos);
	}
	
}