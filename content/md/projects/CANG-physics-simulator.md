# C.A.N.G Physics Simulator | Griffen's Web Portfolio
C.A.N.G Physics Simulator
## 5/1/22
My introduction to large-scale software development as well as graphics programming.
### centerImg_0
/images/project-pics/CANG-physics-sim-overview.png CANG-overview
### Overview
C.A.N.G Physics Simulator is a C++ physics engine made from scratch using OpenGL. The 
### link_1
https://github.com/skypjack/entt Entt
### continue_1
entity-component-system handles object manipulation by labeling each entity with an ID,
and each entity can gain certain characteristics such as flammable, bird (flying entities), or
animated. C.A.N.G is an acronym of the names of the team members, Cyrus, Amethyst, Nate, and Griffen. Each of us
had our own "Cool Cam" where we implemented a special feature into the program that is supposed to 
be impressive.
### Explosions!
My Cool Cam was to make explosions that push objects away from the epicenter of the explosion. This
was fairly tricky to do. First, I needed a way to express something emerging from an epicenter. I was
able to draw squares or rectangles, but they seemed too blocky and wasn't completely realistic looking.
I decided to draw 8 triangles called "force waves" that were evenly spaced in arc length around a point. 
Creating the force wave entities and being able move them was easy. The tricky part was collision detection.
After rewriting my algorithm 3 times, I eventually figured out I can check the coordinates in a step pyramid
shape. I started at the bottom row of the triangle, checked left to right if there is collision overlap,
and move up, progressively decrementing the row length. This allowed me to check only the spaces that
appear to be within the actual triangle texture, not outside it (in an invisible square shape). One I 
was able to detect other objects, the next part was to just move the object that is in question. This
is done by the force wave, where it will call a move function to move the entity in the same direction of
the force wave.
### p_2
A demo video can be found here: 
### link_3
https://www.youtube.com/watch?v=1UXlkcL6s_0 https://www.youtube.com/watch?v=1UXlkcL6s_0
### p_4
The GitHub repository can also be found here:
### link_5
https://github.com/Cyrus-Santiago/C.A.N.G.-Phys-Sim https://github.com/Cyrus-Santiago/C.A.N.G.-Phys-Sim