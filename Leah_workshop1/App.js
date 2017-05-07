var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname+"Staedte.json", function(err, data) { 
    if (err){
        konsole.log(err);
        return;
    }
    else(data= JSON.parse(data));
         }
        for(var i=0;i<data.cities.length;i++){
        konsole.log("name: "+chalk.pink(data.cities[i].name));
        konsole.log("country"+chalk.green(data.cities[i].country));
        konsole.log("population"+chalk.blue(data.cities[i].population));
        konsole.log("------------------");
    }

                                                           
