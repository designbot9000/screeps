/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvesterEfficiency'); // -> 'a thing'
 */
 module.exports = function (creep, state){
     if(creep.memory.efficiency){
         if(state == "mining"){
             creep.memory.efficiency.mining += 1;
             
         }else if(state == "waiting"){
             creep.memory.efficiency.waiting += 1;
         }
         var m = creep.memory.efficiency.mining;
         var w = creep.memory.efficiency.waiting;
         creep.memory.efficiency.ratio = (m === 0 ) ? 0 : m/(m+w);          
     }else{
         creep.memory.efficiency = {waiting: 0, mining: 0, ratio: 0};
     }
 }