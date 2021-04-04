/**
 * Will just export a single function that returns DiplodocApp
 */
import DiplodocApp from '../models/diplodoc'

const reader = (appPath, { srcPath, staticPath }) => {
  return new DiplodocApp(appPath);
}


module.exports = reader;