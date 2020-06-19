var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var url = req.url;
    var page = './pages/home.html';

    switch(url) {
        case '/bom': {
            page = './pages/diabom.html';
            break;
        }
        case '/ruim': {
            page = './pages/diaruim.html';
            break;
        }
        case '/razoavel': {
            page = './pages/diarazoavel.html';
            break;
        }
        default: {
            page = './pages/home.html';
            break;
        }
    }

    fs.readFile(page, function(err, html){
        res.end(html);
    });

});
console.log('Server listen on localhost: 8000');
server.listen(8000);