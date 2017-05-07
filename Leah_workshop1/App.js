var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname+"/staedte.json", function(err, data) { 
    if (err){
        console.log(err);
        return;
    }
    else(data= JSON.parse(data));
         
            data.cities.sort(function(a,b){
    if(a.population > b.population){
        return 1;
    }
    if (a.population < b.population){
        return -1;
    }
    return 0;
    
});
fs.writeFileSync(__dirname+"/staedte_sortiert.json", JSON.stringify(data));

        for(var i=0;i<data.cities.length;i++){
        console.log("name: "+chalk.red(data.cities[i].name));
        console.log("country"+chalk.green(data.cities[i].country));
        console.log("population"+chalk.blue(data.cities[i].population));
        console.log("------------------");
    }

});
                                                           
