/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('assignment'); // -> 'a thing'
 */
 var say = require("creepSay");
 module.exports = function(creep){
	var role = creep.memory.role;
	function getAssignment(role) {
		var map = {
			'harvester': function(){
				var assignedSource;
				if(!Memory.sources){
				    console.log("Memory.sources not present, creating...")
					var sources = creep.room.find(Game.SOURCES);
					console.log(sources.length + " sources");
					var source = [];
					var distance;
					var count = sources.length;
					for(var i = 0; i < count; i++){
					    var sourceObj = {'id':null, 'data': { 'locx':null,'locy':null,'distance':null, 'efficiency':null, 'workers':[], 'runners':[]}};
						distance = creep.pos.findPathTo(sources[i]);
						distance = distance.length;
						sourceObj.id = sources[i].id;
						console.log(sourceObj.id);
						sourceObj.data.locx = sources[i].pos.x;
						console.log(sourceObj.locx);
						sourceObj.data.locy = sources[i].pos.y;
						console.log(sourceObj.locy);
						sourceObj.data.distance = distance;
						source[i] = sourceObj;
					}
					
					Memory.sources = source;
				}
				var sources = Memory.sources;
				var length = sources.length;
				var getSource = function(n){
					for(var i = length - 1; i >= 0; i--){
						var workers = Memory.sources[i].data.workers
						if(workers.length === n){
						    Memory.sources[i].data.workers[workers.length] = creep.name;
							return i;
						}
					}
					if(n < length){
						return getSource(n+1);
					}
					console.log("error: assignment.js: getAssignment: harvester, getSource: exceeded sources")
					return;
				}
				assignedSource = sources[getSource(0)];
				if(assignedSource){
					return assignedSource.id;
				} else {
					console.log("failed to assign source to " + creep.name);
				}
				
				
			}, 
			
			'courier': function() {
				var sourceId;
				var sources = Memory.sources;
				creep.memory.assignment = null;
				for(var i = sources.length-1; i >= 0; i--){
					var workers = sources[i].data.workers;
					console.log(workers.length);
					var couriers = sources[i].data.runners;
					console.log(couriers.length);
					sourceId = sources[i].id;
					//var eff = creep.memory.efficiency.ratio;
					if(workers.length >  0 && couriers.length === 0){
						sources[i].data.runners.push(creep.name);
						creep.memory.assignment = sourceId;
						return sourceId;
					}
				}	
				for(var i = sources.length-1; i >= 0; i--){
					var workers = sources[i].data.workers;
					console.log(workers.length);
					var couriers = sources[i].data.runners;
					console.log(couriers.length);
					sourceId = sources[i].id;
					//var eff = creep.memory.efficiency.ratio;
					var avgEff = 0;
					    for(var j = 0; j < workers.length; j++){
					        console.log("d " +workers[j]);
					        avgEff += Game.creeps[workers[j]].memory.efficiency.ratio;
					    }
					    avgEff = avgEff/workers.length;
					    if(avgEff < .8){
    						sources[i].data.runners.push(creep.name);
    						creep.memory.assignment = sourceId;
    						return sourceId;
					    }
				}
				var nam = creep.name;
				Game.creeps[nam].remove();
				delete Memory.creeps.nam;
					
					    
				
			}
			//implement other assignments...
		};
		var assign = map[role];
		if(assign) return assign();
	}
	
	var assignment = creep.memory.assignment;
	if(!assignment){
		creep.memory.assignment = getAssignment(role);
		assignment = creep.memory.assignment;
		say(creep, assignment);
		return assignment;
	}
	say(creep, assignment);
	return assignment;
}