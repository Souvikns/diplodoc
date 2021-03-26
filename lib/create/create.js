

const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

const create = projectName => {
    const basePath = process.cwd();
    fs.mkdirSync(path.resolve(basePath, projectName));
    exec('node init -y ', (err, stdout, stderr) => {
        // TODO: Check for error and react
        if(err){
            console.log(err);
        }
    })
}