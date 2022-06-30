//Server that initializes the http connection for the website
var fs = require("fs");
const express = require('express');
const jsonmark = require('jsonmark')
const scripts = require('./scripts/module.js')
const {hostname,port} = require("./JSON/config.json");
//The template content is used so much, it deserves it's own variable so we automatically have it
const templateContent = require('./JSON/template.json')
//Initialize the server
const app = express();
app.set('view engine', 'pug')
app.set('views','./content/views')
app.locals.toggleDropdown=scripts.toggleDropdown
//callback methods for when a client connects to a certain page

//Back-end files, must be loaded first
app.get('/scripts.js', (request,response) => { findSpecificFile('./scripts/scripts.js',request,response)});
// app.get('/index.css', (request,response) => { findSpecificFile('css/index.css',request,response)});

//TODO Bootstrap 5
//Mandatory callback for the home page. Since home IS the root, it needs a special pattern match case
app.get('/', (req,res) =>{renderContent('./content/md/main/index.md','main/index',req,res)});
app.get('/:main', (req,res) => {
    var main = req.params.main, moreContent;
    if(main==="blog"){
        moreContent=require('./JSON/blogposts.json');
    }       
    renderContent(`./content/md/main/${main}.md`,`main/${main}`,req,res,moreContent)
});
app.get('/:main/:name', (req,res)=>{
    //TODO change path string so that it detects what file extension to use(?)
    var name = req.params.name, main = req.params.main, view=name
    //If the request is for a blog post page.
    if(main==="blog")   view="blog-template"
    renderContent(`./content/md/${main}/${name}.md`,`${main}/${view}`,req,res)
});
app.get('/images/:main/:pic', (req,res)=>{
    var main = req. params.main, pic = req.params.pic
    findSpecificFile(`./content/images/${main}/${pic}.png`,req,res)
});
app.get('/*', function(req,res){renderContent('./content/md/main/404.md','main/404',req,res);});

//Allows for the pug files to read in the JSON content
module.exports=app;

//Listen for incoming client connections
app.listen(port, hostname, () => console.log(`Listening on ${hostname}:${port}...`));

/*---------------------Functions/Methods--------------------------- */
/*
* This part is very dense. This parses the markdown buffer "content" from the file to JSON. Then, the 
* content is converted to a string in order to clean up any # present in the headers. Then, the string
* is parsed back into JSON*/
function parseMDContent(content){
    return JSON.parse(
        (JSON.stringify(jsonmark.parse(content), null, ' '))
        .replace(/# |## |### /gi,""))
}
//TODO make it so that invalid pages don't crash the server lol
/*This function gathers necessary information for a webpage and renders it */
function renderContent(MDfilepath,view,req,res,moreContent){
    //Reads in a markdown file to parse from
    fs.readFile(MDfilepath, (err,content)=>{
        if(err)     renderContent('./content/md/main/404.md','main/404',req,res);
        else    {
            //Gets the markdown content in JSON format
            var mdContent=parseMDContent(content.toString())
            var allContent;
            //Compiles all content together into a single JSON object
            if(moreContent) allContent=Object.assign(templateContent,mdContent,moreContent)
            else    allContent=Object.assign(templateContent,mdContent)
            //Renders the pug file with the associated content
            res.render(view, allContent);
        }
    });
}

/*Loads the contents of some file to the client with a direct filepath*/
function findSpecificFile(filePath, request, response){
    fs.readFile(filePath, function(err,content){
        console.log("Retrieving "+filePath)
        if(err)     throw err;
        else    {
            response.write(content);
            response.end(); 
        }
    });
}
