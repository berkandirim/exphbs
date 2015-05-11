var fs = require('fs');
var handlebars = require('handlebars');

var ExpHbs = function() {
};

ExpHbs.prototype.__express = function(filePath, options, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) return callback(new Error(err));
    var template = handlebars.compile(content);
    var rendered = template(options);
    return callback(null, rendered);
  });
};

module.exports = new ExpHbs();