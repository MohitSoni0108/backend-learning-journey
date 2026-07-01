const path = require( "path");;
const fs = require("fs");

const dataFolder = path.join(__dirname , "mohit");
console.log(fs.existsSync(dataFolder));

//check if the the data folder with name mohit exist or not if not create that data folder 

if(!fs.existsSync(dataFolder))
{
    fs.mkdirSync(dataFolder);
    console.log(`data folder created`);

}
