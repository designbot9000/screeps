/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('courierAction'); // -> 'a thing'
 */
 
var getState = require('getState');
var updateState = require('stateUpdate');
var say = require('creepSay');
module.exports = function(creep, source){
	var state = getState(creep) ;
	say(creep, state);
	if(!creep.spawning){
	if(state == "ready" || state == "waiting"){
		if(creep.pos.inRangeTo(source, 2)){
			var energy = creep.pos.findInRange(Game.DROPPED_ENERGY, 5);
			if(energy){
				creep.pickup(creep.pos.findClosest(energy));
				if(creep.energy == creep.energyCapacity){
					updateState(creep, "busy");
				}
			}else{
				updateState(creep, "waiting");
			}
		}else {
		    creep.moveTo(source);
		}
	}else if (state == "busy"){
		var spawn = creep.memory.home || "Spawn1";
		if(creep.pos.inRangeTo(Game.spawns[spawn], 1)){
			creep.transferEnergy(Game.spawns[spawn]);
			updateState(creep, "ready");
		}else{
			creep.moveTo(Game.spawns[spawn]);
		}
		
		
	}
	}
}