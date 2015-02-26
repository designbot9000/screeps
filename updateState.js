/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('stateUpdate'); // -> 'a thing'
 */
 
 module.exports = function(creep, state){
	creep.memory.state = state;
	return state;
}