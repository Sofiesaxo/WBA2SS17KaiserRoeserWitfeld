var fs = require('fs');

fs.readFile(__dirname+"/staedte.json", function(err, data) { 
    if (err){
        console.log(err);
        return;
    }
    else{
        data= JSON.parse(data);
        for(var i=0;i<data.cities.length;i++){
            console.log("name: "+data.cities[i].name);
            console.log("country"+data.cities[i].country);
            console.log("population"+data.cities[i].population);
            console.log("------------------");
        }
    }

});