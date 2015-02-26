var harvester = require('harvester');
var courier = require('courier');
var spawning = false;
var h =0;
var c =0;
for(var name in Game.creeps){
    if(Game.creeps[name].memory.role == "harvester") h+=1;
    //console.log(h);
    if(Game.creeps[name].memory.role == "courier") c+=1;
}
Memory.creepCount.workers = h;
Memory.creepCount.couriers = c;
if(!Memory.creepCount || Memory.creepCount.workers < 5){
    if(!Game.spawns.Spawn1.spawning && !spawning){
        var nam = "Worker" + Memory.creepCount.workers;
        if(!Game.creeps.nam){
        Game.spawns.Spawn1.createCreep([Game.WORK, Game.WORK,Game.WORK, Game.CARRY, Game.MOVE], nam, {role: "harvester"});
        spawning = true;
            
            

        }
        //if(Game.creeps.nam) 
    }
}
else if(!Memory.creepCount || Memory.creepCount.couriers < 5){
    if(!Game.spawns.Spawn1.spawning && !spawning){
        var nam = "Courier" + Memory.creepCount.couriers;
        if(!Game.creeps.nam){
        Game.spawns.Spawn1.createCreep([Game.CARRY, Game.MOVE, Game.CARRY, Game.MOVE,Game.MOVE], nam, {role: "courier"});
        spawning = true;
        
            

        }
        //if(Game.creeps.nam) 
    }
}
var CPU = require('cpuUse');
for(var name in Game.creeps){
    var creep = Game.creeps[name];
    //creep.memory.role = "harvester";
    if(creep.memory.role == 'harvester') harvester(creep);
    
    if(creep.memory.role == 'courier') courier(creep);
}
CPU();