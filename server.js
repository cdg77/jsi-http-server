// var http = require('http');

// http.get('http://www.google.com', function(response) {
//   response.pipe(process.stdout);
// });


// // chat server
// var net = require('net');
// var connections = [];
// net.createServer(function(connection) {
//   connections.push(connection);

//   connection.on('data', function(data) {
//     process.stdout.write(data);
//     connections.forEach(function(connection) {
//       connection.write(data);
//     })
//   });
// }).listen(3030);

var http = require('http');
var path = require('path');
var fs = require('fs');
http.createServer(function(req, res) {
  // var filePath = path.join(__dirname, 'big.html');
  var filePath = path.join(__dirname, 'public', req.url);
  console.log('%s %s', req.connection.remoteAddress, req.url);
  var fileStream = fs.createReadStream(filePath);
  fileStream.on('error', function(e) {
  	console.log('problem with file: ' + e.message);
  });

  fileStream.pipe(res);

}).listen(3030);