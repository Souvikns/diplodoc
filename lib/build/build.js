const { loadConfig } = require('../config');
const fs = require('fs');
const path = require('path');

class Builder {
    _basePath;
    _config;
    constructor(basePath) {
        this._basePath = basePath;
    }

    build() {
        // TODO: search for config file ? apply config : use default config
        this._config = loadConfig(this._basePath);
        // TODO: Fetch all the markdown files from pages folder

        // TODO: generate html from markdown filesA
    }
}

const fetchMarkdownFiles = basePath => {
    if(typeof basePath !== "string") throw new Error("please check the path");
    // TODO: Fetch all the files from the folder and map only markdown files.
}