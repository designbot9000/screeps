/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creepSay'); // -> 'a thing'
 */
 module.exports = function(creep, message){
	creep.say(message);
}