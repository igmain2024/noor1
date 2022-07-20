# Personal Portfolio Website
My personal portofolio website made using Node.js and Express.js. Currrently, I am using Heroku as my web host, and the live site may be found [here](https://griffenagnello.herokuapp.com/). All the page contents are also able to be viewed here in this repository (but uh, good luck figuring how the page will look). All HTML and CSS style pages are made from scratch-ish. I am using the template language Pug, but I have hand-made all my template files. No pre-built templates are used. This decision is for me to learn about the fundamentals of web development in detail from start to finsih.

## Contents
- Home Page: A brief introduction of who I am, what I've been working on, and some information about the website.
- Blog: A collection of posts on various topics, mainly about my personal programming journey. 
- Game: To be determined. I will likely change this to something else other than a game.
- Contact: My personal contact information and related links.
- 404 Error: It's literally a 404 error message to a page that doesn't exist. I included this button in the navigation for debugging purposes, but I decided to keep it around for fun.

## How It Works
From the main directory, the server is started-up by running `node app.js`. This will require the user to have Node.js, as well as the necessary modules. The server will listen to connections on `process.env.PORT`, which is used by Heroku. The server may also run on `localhost:8888`. In the server app, GET requests may be made to certain webpages. When a GET request is received, the server will compile the associated markdown content into a pug template file. The pug file will then be converted to HTML. The resutlting HTML is sent to the client.
