# Sticky Footer is Inconsistent
## 6-16-22
The first major road block I have experienced while making this website.
### The problem
I don't know if I'm chasing a problem that does not exist. For the past few days, I've been
attempting to make it so that the footer remains at the very bottom of the web page.
The issue is that I want a general rule so that the footer will always be at the bottom
regardless of the height of the page. The reason why this is such a problem is
I have web pages of various heights, and as of right now, I have a dropdown menu in the blog
page, which affects the height of that page. 
### First solution
I have been able to get it so that the footer is at a fixed position (position 0) from the bottom. The issue with this is that if I manage to go past 0 (I open the dropdown menu), the footer overlaps with the content right there.
### Second solution
Ironically, the solution that works best is to set the position style to
### codeBlock_0
relative
### continue_0
when there is a lot of content, and 
### codeBlock_1
absolute
### continue_1
when there is not enough content. This method is not optimal because it means I have to hard code each and every page footer style.
### The current solution
The method that I am currently using is to add a top margin on the footer relative to 
the size of the web browser. This works well enough for what I need right now, however
it should not be the final solution. For web pages that have enough content, there is 
a chunk of whitespace at the end of the content before the footer. As I stated at the start
of this post, I am not sure if this is an issue that I need to worry about. As long as
I have enough content on each page, the footer will always be at the bottom of the page.
For the few pages that don't have enough content, I could just manually set the position to
the bottom. I gave my best effort to find a general solution, and I have decided to put
this to rest for now. My next task is going to be to automate the production and loading
of HTML pages.
