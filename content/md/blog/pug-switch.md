# Pug Switch | Griffen's Web Portfolio
Dynamic Pages are Here
## 6-29-22, Edited on 7-12-22
The painstaking process of switching from HTML to pug pages.
### I finally finished...
In the last 
### link_0
/blog/footer-trouble post,
### continue_0
I mentioned that I was going to figure out how to automate HTML page generation. I can safely say
that this endeavor has come to an end. Now, each of the main pages follow a main template made in pug.
Every single page pulls from template header, navigation, and footer pug files. This process has been
quite endearing because I've had to rethink how I store text information and I've had to try numerous methods just to get this to work.
### Why are you using your pet pug to make HTML files?
Pug is a template language that throws HTML and Javascript into a blender. The main purpose of it is to
make sites with dynamic information. This process is done by passing some JSON object to your pug file.
The pug file can then iterate through each attribute in the JSON and paste information according to how
you want it. In addition, pug offers a simplified version of HTML's syntax (mainly, no need for using <tag>, you just would say tag ) with Python indentation rules. Here is my blog template pug file as
an example of what I'm talking about.
### centerImg_1
/images/blog-pics/pug-switch-pug-file.png pug_file
### Oh no, not the strand of else ifs
The source code is all publicly available on  
### link_2
https://github.com/quakeroatsgod/personal-website GitHub
### continue_2
, so it's not like I'm sharing anything secretive here. As you can see, I am including the contents
of the template files into this file. The main purpose of that is so that each file does not have
repeated content written in there. When I was making straight HTML files, I had to copy and paste
general content into each file, and it was getting tedious doing it every time. Eventually, I realized
that if I wanted to make 50 blog posts, I'd have to make 50 HTML files. Each HTML file would have the
same navigation bar, the same header, the same footer, and a centered box for the text. Here's the worst part
about that: say I wanted to add a link to the navigation bar. I would then have to go into 50 files (more including
the main pages), and change the navigation bar tag in each one. That is a massive amount of wasted time, and
I wanted to avoid that issue. It is a classic example of something I learned in my software engineering class
called the "Waterfall problem," where issues get more costly to fix the later they are addressed. With pug, 
I only need to worry about maintaining this single blog post template file.
### Pug is bad, and here's why
Pug works very well with markdown files, as in if you give pug a # header, it could easily parse that into a h1 header. In addition, pug will work accordingly if you use an include statement with a markdown file. Here's the issue: the single fact that I can't use 
### codeBlock_3
include variable_name 
### continue_3
is the reason why this transition from HTML to pug took 2 weeks and not 1 week to complete. In pug, you are not allowed to include filepaths that come from a variable. If I try that exact line of code,
pug will look for a file named "variable_name.pug" in my current directory. Even if I used a mixin (which is similar to a macro definition in C), it would still look up the literal parameter name. Sure, I could include a markdown file with an absolute path, but that would defeat the purpose of templates if I have to manually insert content again. I extensively researched if I could achieve what I wanted. Eventually, I found a post on GitHub from the creator of pug saying that dynamic includes will likely never be possible. 
### "JSONify" markdown
I knew I could send JSON to a pug file, and that was the only other method that I could think of to use. I wasn't sure if making straight JSON files was the right call, since (as far as I know right now) they are not meant to hold large amounts of content, such as blog post content. Then I thought about converting markdown into JSON, and then sending that JSON to the pug file. Sure enough, there's a node package out there already made called 
### link_4
https://www.npmjs.com/package/jsonmark jsonmark
### continue_4
which literally converts markdown into JSON. The neat part about it is that content will always be
labeled with "content", meaning that in pug I can iterate 
### codeBlock_5
each contentTag in content
### continue_5
and all of the content from the markdown will be pasted into the pug file. The main problem now is that
I am pasting straight text, not markdown. If I want to paste an image or link, I can't use the markdown
method.
### Introducing format.md!
I made my own specific ruleset for how markdown files are made. That's why all my markdown files will have something like 
### codeBlock_6
codeBlock_0, link_1, continue_2
### continue_6
for some headers. These are parsed differently than standard paragraph titles and content bodies. From the picture above, images, code blocks, and so on are handled differently with different classes and tags. It's a slow process, but it's what I have to work with.
### In conclusion
This problem felt like I was going down a rabbit hole. Each time I feel like I've made progress, there was another unforeseen obstacle that I had to overcome. Looking back, I probably wouldn't have used pug. I would have used something that has more documentation and is a little more friendly to work with. Don't get me wrong, this has been a lot of fun regardless, and I've learned a lot too. I'm thinking of re-doing my website with another framework, but I have not decided yet. For now, I will have to halt production on the website for at least a short while. I started summer quarter at Clark College, and my time will be dedicated to that. In addition, I'm starting an internship on August 1st, so I will not have much free time to work on this!
### p_7
Until then, have a good one!
### p_8
Griffen