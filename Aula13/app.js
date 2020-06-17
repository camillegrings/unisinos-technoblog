var http = require('http');
var server = http.createServer(function(req,res){
    var url = req.url;
    console.log(url);
    if(url == '/bom'){
     
       window.location('pages/diabom.html');
      
    } else {
        res.end(`
        <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primeiro Programa Node</title>
    </head>
    <body>
    <center>
        <h1>ola, digite na URL como esta seu dia</h1>
        respostas possiveis bom, razoavel, ruim
    <center>
    </body>
    </html>
    `);
    }
   
});
console.log('localhost: 8000');
server.listen(8000);