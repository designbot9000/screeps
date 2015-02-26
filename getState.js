/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('getState'); // -> 'a thing'
 */
 var updateState = require('stateUpdate');
 module.exports = function(creep){
     var state = (creep.memory.state) ? creep.memory.state : updateState(creep, "ready");
     return state;
 }