const fs = require('fs');
const path = require('path');

/**
 *
 * @returns {string}
 */
exports.template =
    () => { return fs.readFileSync(path.resolve(__dirname, "index.html")); }