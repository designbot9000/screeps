/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('mine'); // -> 'a thing'
 */
 var eff = require('harvesterEfficiency');
 var say = require('creepSay');
module.exports = function(creep, source) {
    var myCouriers =0 ;
    var sources = Memory.sources;
    for(var i = 0; i < sources.length; i++){
        if (sources[i].id == source.id){
            //console.log(sources[i].id);
            //console.log(source.id);
            myCouriers = sources[i].data.runners;
        }
    }
	
	if(source.energy > 0) {
		if(creep.energy == creep.energyCapacity){
			say(creep, "I'm full");
			if(myCouriers === 0){ eff(creep, "waiting");}
			console.log(myCouriers);
			for(var i in myCouriers){
			    //console.log(i);
			    //console.log(Game.creeps[myCouriers[i]]);
			    
				if(creep.pos.inRangeTo(Game.creeps[myCouriers[i]], 4)){
					creep.dropEnergy();
					say(creep, "Pick it up!");
				}else {
					say(creep,  "Waiting.");
				}
			}
		}else {
			say(creep, "Mining...");
			if(myCouriers === 0){ eff(creep, "mining");}
			creep.harvest(source);
		}
	}else {
		say(creep, "Waiting for energy to recharge!");
	}
}