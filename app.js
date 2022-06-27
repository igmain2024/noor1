//Server that initializes the http connection for the website
var fileReader = require("fs");
const express = require('express');
const jsonmark = require('jsonmark')
const {hostname,port} = require("./JSON/config.json");
const templateContent = require('./JSON/template.json')
var mdContent = {}
//Initialize the server
const app = express();
app.set('view engine', 'pug')
app.set('views','./views')

//callback methods for when a client connects to a certain page

//Back-end files, must be loaded first
app.get('/scripts.js', function(request,response){ findSpecificFile('scripts/scripts.js',request,response)});
app.get('/index.css', function(request,response){ findSpecificFile('css/index.css',request,response)});

//TODO Bootstrap 5
//TODO automate html pages
app.get('/', function(req,res){
    fileReader.readFile('./test/test.md', function(err,content){
        if(err)     throw err;
        else    {
            mdContent=jsonmark.parse(content.toString())
            mdContent=Object.assign(templateContent,mdContent)
            console.log(mdContent)
            res.render('index', mdContent);
        }
    });
    
});
app.get('/*', function(req,res){res.render('404');});

//Allows for the pug files to read in the JSON content
module.exports=app;
// //Front-end files
// //Mandatory callback for the home page. Since home IS the root, it needs a special pattern match case
// app.get('/', function(request,response){ findSpecificFile('html/index.html',request,response)});

// //Matches any of the main branches from root
// app.get('/:name',function(request,response){findFile('html/'+request.params.name,'.html', request, response)});
// //Matches a branch from a main branch. Mainly used for blog posts in /blog/*
// app.get('/:main/:branch',function(request,response){
//     findFile(('html/'+request.params.main+'/'+request.params.branch),'.html', request, response);
// });
// //Matches a branch for loading images. Only loads PNGs (for now, at least(?))
// app.get('/images/:branch/:pic', function(request,response){
//     findFile(('images/'+request.params.branch+'/'+request.params.pic),'.png', request, response);
// })
// //Wild card, handles everything else (not valid) with a 404 page
// app.get('/*', function(request,response){ findSpecificFile('html/404.html',request,response)});
//Listen for incoming client connections
app.listen(port, hostname, () => console.log(`Listening on ${hostname}:${port}...`));

// /* Loads the contents of an html file to the client. This method looks pretty similar
// * findSpecificFile, with the exception that the exception (badum tss) is not thrown
// * if an html file is not found. Instead, a 404 page is sent*/
// //TODO merge the two methods into one?
// function findFile(rootPath, extension, request, response){
//     //Append file extension to end of 
//     var filepath=rootPath+extension
//     console.log("Retrieving "+filepath)
//     fileReader.readFile(filepath, function(err,content){
//         if(err){
//             findSpecificFile('html/404.html',request,response)
//         }
//         else{
//             response.write(content);
//             response.end(); 
//         }
//     });
// }


/*Loads the contents of some file to the client with a direct filepath*/
function findSpecificFile(filePath, request, response){
    fileReader.readFile(filePath, function(err,content){
        console.log("Retrieving "+filePath)
        if(err)     throw err;
        else    {
            response.write(content);
            response.end(); 
        }
    });
}
