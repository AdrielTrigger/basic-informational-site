var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var requestedURL = url.parse(req.url, true);
    var filename = '.' + requestedURL.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);