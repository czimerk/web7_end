var static = require('node-static');
var http = require('http');
var exec = require('child_process').execFile;

var chrome = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";

var file = new (static.Server)('./public');
var portNumber = 8080;
http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(portNumber);

console.log("server listening at port " + portNumber);
exec(chrome, ["http://localhost:" + portNumber]);