/*Deprecated code from app.js that is no longer used, but kept for archival purposes */

// //Front-end files
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

//I never actually used this function. I thought I was going to, but the process wasn't working out.
// /*This gets all the description headers from all the blog mardown pages */
// function getBlogPreviewContent(){
//     return 
//     var blogJSONArray=[]
//     var files=fs.readdirSync('content/md/blog')
//     for(let file of files){
//         var buffer=fs.readFileSync(`content/md/blog/${file}`)
//         var mdContent=parseMDContent(buffer.toString())
//         blogJSONArray.push(mdContent)
//     }
//     return blogJSONArray
// }