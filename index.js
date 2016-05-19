var pathExec = require('path-executables');
var spawn = require('child-process-promise').spawn;
var path = require('path');

module.exports = options => pathExec().then(execs =>  execs.reduce((out, exec) => {
	out[path.basename(exec)] = function() {
		return spawn(exec, [].slice.call(arguments), options);
	};

	return out;
}, {}));
