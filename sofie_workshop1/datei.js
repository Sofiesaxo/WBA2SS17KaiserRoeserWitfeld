var chalk = require('chalk');
var fs = require('fs');

fs.readFile(__dirname+"/staedte.json", function(err, data) { 
    if (err){
        console.log(err);
        return;
    }
    else{
        data= JSON.parse(data);
        for(var i=0;i<data.cities.length;i++){
            console.log("name: "+chalk.green(data.cities[i].name));
            console.log("country"+chalk.yellow(data.cities[i].country));
            console.log("population"+chalk.blue(data.cities[i].population));
            console.log("------------------");
        }
    }

});