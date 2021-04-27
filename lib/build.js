const Reader = require('./reader');
const path = require('path');
const fs = require('fs');
const marked = require('marked');

const getTemplate = () => {
    return fs.readFileSync(path.resolve(__dirname, "template", "index.html"), 'utf-8');
}


module.exports = async (dir, options) => {
    try {
        let template = getTemplate();
        let markdownFiles = await Reader(dir).mdFiles();
        let {outputDir} = options;
        markdownFiles.forEach(file => {
            mkData = marked(fs.readFileSync(file, "utf-8"));
            template.replace(/<%.+%>/g, mkData);
            fs.writeFileSync(path.resolve(outputDir, path.basename(file).split('.')[0]+'.html'));
        })
    } catch (error) {
       console.log(error);
    }
}