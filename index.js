// var http = require("http");
// var fileReader = require("fs");
// var portNum=8888;
// var hostname="localhost";
// http.createServer(function(request, response){
//     fileReader.readFile('index.html', function(err,html){
//         if(err){
//             throw err;
//         }
//         response.writeHead(200,{"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     });

// }).listen(portNum,hostname, () => {
//     console.log("listening...");
// });