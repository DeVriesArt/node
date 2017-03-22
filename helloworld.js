console.log("hello world");var http = require('http');

http.createServer(function (request, response) {
    console.log('request starting...');

    response.writeHead(200, { 'Content-Type': 'text/html' });

    var html = '<center><div style="width:200px; height:200px; background-color:blue;"><form><input name="input" type="text" ><br><button>Submit</button></div></center>';

    response.end(html, 'utf-8');
}).listen(8125);

console.log('Server running at http://127.0.0.1:8125/');