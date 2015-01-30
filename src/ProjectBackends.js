// Copyright © 2014 Intel Corporation. All rights reserved.
// Use  of this  source  code is  governed by  an Apache v2
// license that can be found in the LICENSE-APACHE-V2 file.

var Config = require("./Config");
var Console = require("./Console");

var ProjectBackends = {};

ProjectBackends.loadDefault = function() {

    var implementations = [
        "crosswalk-app-tools-backend-ios",
        "crosswalk-app-tools-backend-demo",
        "./AndroidProject"
    ];

    var ProjectImpl = null;

    for (var i = 0; i < implementations.length; i++) {

        try {

            var ProjectImpl = require(implementations[i]);

            // If we get here there backend has been instantiated successfully.
            Console.log("Using backend " + implementations[i]);
            break;

        } catch (e) {

            Console.log("Loading backend " + implementations[i] + " failed");
        }
    }

    return ProjectImpl;
};

module.exports = ProjectBackends;
