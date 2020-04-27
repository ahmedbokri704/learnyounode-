const fs = require ('fs')
 fs.readFile(process.argv[2],(err,content)=>
{
    if(err){console.log("error")}
    else{
   console.log(content.toString().split('\n').length-1)}
})