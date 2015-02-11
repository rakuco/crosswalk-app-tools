// Copyright © 2014 Intel Corporation. All rights reserved.
// Use  of this  source  code is  governed by  an Apache v2
// license that can be found in the LICENSE-APACHE-V2 file.

var FS = require("fs");

var FileCreationFailed = require("./util/exceptions").FileCreationFailed;
var OutputIface = require("./OutputIface");



/**
 * Creates an output writing to a file.
 * @extends OutputIface
 * @constructor
 * @param {String} path Path to logfile. Existing content will be overwritten.
 * @throws {exceptions.FileCreationFailed} If file at path could not be opened for writing.
 */
function LogfileOutput(path) {

    this._path = path;

    var options = {
        flags: "w",
        mode: 0600
    };
    
    FS.writeFileSync(this._path, "");

/* TODO    
    if (!this._fp) {
        throw new FileCreationFailed("Could not open file " + path);
    }
*/
}

// FIXME I have no idea why this breaks, something about the singleton maybe?
// LogfileOutput.prototype = OutputIface.prototype;

LogfileOutput.prototype.error =
function(message) {

    FS.appendFileSync(this._path, "ERROR: " + message + "\n");
};

LogfileOutput.prototype.warning =
function(message) {

    FS.appendFileSync(this._path, "WARNING: " + message + "\n");
};

LogfileOutput.prototype.info =
function(message) {

    FS.appendFileSync(this._path, "* " + message + "\n");
};

LogfileOutput.prototype.highlight =
function(message) {

    FS.appendFileSync(this._path, "*** " + message + "\n");
};

LogfileOutput.prototype.print =
function(message) {

    FS.appendFileSync(this._path, message);
};



module.exports = LogfileOutput;
