const mymodule = require('./mymodule');

const dir= process.argv[2];
const ext= process.argv[3];

mymodule(dir, ext, (err, filtredlist)=>{
    if (err) return console.log(err);
    filtredlist.forEach(file => {console.log(file);
        
    });
})