// TODO: We will build the config class and load config module in the directory
const fs = require('fs');
const path = require('path');
const yml = require('js-yaml');

class Config {
    title;
    theme;
    routes;

    constructor({
        title = "Diplodoc",
        theme = "default",
        routes = { "/": "index.md" }
    }) {
        this.title = title;
        this.theme = theme;
        this.routes = routes;
    }

}

const loadConfig = (basePath) => {
    //TODO: We will check for the config file and load it
    try {
        if (fs.existsSync(path.resolve(basePath, 'diplodoc.config.yml'))) {
            return new Config(
                yml.load(fs.readFileSync(
                    path.resolve(basePath, 'diplodoc.config.yml')
                ))
            )
        } else {
            return new Config({});
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    loadConfig
}