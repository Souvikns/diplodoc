const { loadConfig } = require('../config');

class Builder {
    _basePath;
    _config;
    constructor(basePath) {
        this._basePath = basePath;
    }

    build() {
        // TODO: search for config file ? apply config : use default config
        this._config = loadConfig(this._basePath);
        // TODO: generate html from markdown files
    }
}