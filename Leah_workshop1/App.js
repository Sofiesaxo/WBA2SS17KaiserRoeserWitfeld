var fs = require('fs');
fs.readFile(__dirname+"Staedte.json", function(err, data) { 
    if (err){
        konsole.log(err);
        return;
    }
    else(data= JSON.parse(data));
         }
        for(var i=0;i<data.cities.length;i++){
        konsole.log("name: "+data.cities[i].name);
        konsole.log("country"+data.cities[i].country);
        konsole.log("population"+data.cities[i].population);
        konsole.log("------------------");
    }

                                                           
