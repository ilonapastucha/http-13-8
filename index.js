var fs = require('fs');
var http = require('http');
var path = require('path');



var server = http.createServer();

server.on('request', function (request, response) {
  response.setHeader('Content-Type', 'text/html, charset=utf8');

  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
      response.write(data);
      response.end();
    });
  } else {
    fs.readFile('./error.jpg', 'binary', function (err, data) {
      response.statusCode = 404;
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(data, 'binary');
      response.end();
    });
  }
});

server.listen(8080);