//Server that initializes the http connection for the website2
var fileReader = require("fs");
const express = require('express');
//Initialize the server
const app = express();
const port = 8888;
const hostname="localhost";
//callback(?) methods for when a client connects to a certain page
//Front-end files
app.get('/', function(request,response){ findFile('html/index.html',request,response)});
app.get('/blog', function(request,response){ findFile('html/blog.html',request,response)});
app.get('/game', function(request,response){ findFile('html/game.html',request,response)});
app.get('/contact', function(request,response){ findFile('html/contact.html',request,response)});
//Back-end files
app.get('/scripts.js', function(request,response){ findFile('scripts/scripts.js',request,response)});
app.get('/index.css', function(request,response){ findFile('css/index.css',request,response)});
//Wild card, handles anything not valid with a 404 page
app.get('/*', function(request,response){ findFile('html/404.html',request,response)});
//Listen for incoming client connections
app.listen(port, hostname, function() {  console.log(`Listening on ${hostname}:${port}...`)});

/*Loads the contents of some html/css/js file to the client*/
function findFile(filePath, request, response){
    fileReader.readFile(filePath, function(err,content){
        if(err)     throw err;
        else    {
            response.write(content);
            response.end(); 
        }
    });
}
