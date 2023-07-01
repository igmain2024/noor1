# CS 442 Final Project | Griffen's Web Portfolio
CS442 Final Project: Vaporwave Scene Graph
### 12-28-22
Final project for CS 442 Computer Graphics that is a 3D scene.
### centerImg_0
/images/project-pics/cs442-final-project-1.png Scene
### Overview
This project is a 3D scene graph made using WebGL and Javascript. A scene graph is essentially a way
of managing several models in a simulated world. Most importantly, when the body of one model moves,
every one of its sub models should move accordingly. The model movement should not affect the rest
of the models in the simulated world, however.
### p_0
I went for a Vaporwave-themed scene. There are videos on Youtube of Vapowave/Synthwave mixes with
some Vapowave car driving down an infinite road with music playing in the background. In my scene,
there is a car driving down a road with a cow entity on top of it spinning around. There is also a
box that orbits around the car that shrinks and grows over time. The box and car wheels move with
the body of the car, but the car body is not affected by any transformations of the sub models. The
road is also tied to the same root node as the car itself, but the road moves independently on its
own timer. There is a skybox that can be viewed in all directions. The "floor" of the skybox is a
neon grid, and the "ceiling" and "walls" are stars with a giant Vaporwave sun in one direction.
There is a pink-ish red directional light coming out from the sun. In addition, there is a blue
light following the floating box, and a green light beneath the car.
### You can load this up yourself!
If you trust me, and if you have Javascript enabled with a modern browser, you can actually load up
the scene in your browser by going to
### link_1
https://quakeroatsgriff.github.io/cs442-final-project-scenegraph-/ https://quakeroatsgriff.github.io/cs442-final-project-scenegraph-/.
### continue_0
You will need to wait a moment for the cow and skybox models to be loaded in. If you see a black void
all around you, that means the skybox failed to load in, and you must refresh the page to load it. I
did not have enough time to fix this, but overall it is not that impactful of a bug since it has an
easy fix to it. Despite having my partner Cyrus listed, I did contribute a considerable amount, and I
consider this to be my own project since Cyrus joined late in development. This is the GitHub repository:
### link_0
https://github.com/quakeroatsgriff/cs442-final-project-scenegraph- https://github.com/quakeroatsgriff/cs442-final-project-scenegraph-