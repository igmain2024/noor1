# Personal Portfolio Website | Griffen's Web Portfolio
Personal Portfolio Website
## 8/20/22
My own personal website with a blog and contact information.
### Overview
Since you're here reading this, you probably know by now that this is my personal
website that I built from scratch! It uses the Node.js framework as well as the
Express.js framework on top of Node to handle the server. The server listens on
PROCESS.ENV.PORT if it's ran on the Heroku app, or localhost:8888 if I'm running it
from my home. The website features server-side rendering, meaning client connections do not
need to run any scripts on their end to load pages. The front-end is made with a template
language called Pug (formerly known as Jade).
### A little bit about Pug
In my mind, Pug is HMTL with python indentation rules and JavaScript thrown into a blender. It is used
to make template pages; pages that have some broad information, but each individual page can draw upon
different pieces of information. This is done by iterating through JSON strings that are passed to Pug's
render method. Pug offers embedded JavaScript...scripts where you may use variables, control flow,
methods, etc. These are removed from the HTML source when sent to the client, making the source look
very clean and free of scripts (at least for a static site like this). Most importantly, Pug allows
me to manage a single post template, and (at the time of this) six markdown files, as opposed to six
individual pages that more or less all have the same boilerplate information.
### What I've done so far
So far, I have home, blog, projects, and contact information tabs. All the Pug and CSS were
written by hand. The idea is that I wanted to learn web development over my school summer. I learned
a great deal about what tags do and what styles look like from
### link_0
https://www.w3schools.com/ W3Schools.com.
### Future Plans
I would like to switch to using Bootstrap for the styling, and perhaps use a different font. Something
I have learned is that the website does not look great on mobile phones. In addition, I would like
to add some sort of game or simulation that you can interact with. I ran out of time to implement anything
more because I do have classes starting up.
### p_1
The GitHub repository can be found here:
### link_2
https://github.com/quakeroatsgriff/personal-website https://github.com/quakeroatsgriff/personal-website
