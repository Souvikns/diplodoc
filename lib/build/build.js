const fs = require('fs'),
    path = require('path');

class Builder {
    _basePath;
    constructor(basePath){
       this._basePath = basePath;
    }

    build(){
        // TODO: search for config file ? apply config : use default config
        // TODO: generate html from markdown files
    }
}