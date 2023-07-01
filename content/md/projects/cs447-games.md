# CS 447 Games | Griffen's Web Portfolio
CS 447 Games: Pushover and Noodle Arm
## 12-28-22
The two 2D games I developed in CS 447 Computer Game Design.
### Overview
During my fall 2022 semester, I took a Computer Game Design class that taught how to make 2D 80s style
arcade games. Both games are made in Java 1.8 with the Slick2D game engine. Slick games are not the
easiest thing to set up, and I would not recommend trying to set up my project. Slick also has very
little documentation and is very old, so I would also not recommend using it for your personal game
projects. Nevertheless, this engine is what our professor wanted us to use, so we made do. The one
nice characteristic I can say is that Slick is fairly easy to code with. The API isn't that complex
once you know how to use it.
### Pushover

### centerImg_0
/images/project-pics/cs447-games-1.png Pushover
### p_0
This game is a maze-like tile based game that takes inspiration from Pac-man. The goal of the game is
to destroy all the red enemies by pushing the snowball into them. The green player can move fairly
quickly, but pushing the snowball is costly and leaves the player vulnerable to attack. The enemies
pursue the player using A* pathfinding, and will cause the player to lose a life if they step onto
the same tile the player is on. There are two power-ups. The blue power-up freezes all enemies in
place for a few seconds, and the pink power-up speeds up all entity movement for about 20 seconds.
There are impassable brown walls and green trees that cannot be moved to. There are also blue deep
snow tiles that are slow for the player to move through, and fast for the enemies to move through.
Destroying enemies rewards the player points. When all enemies are defeated, the game starts again
on the next level board. This is the GitHub repository:
### link_0
https://github.com/quakeroatsgriff/cs447-pushover https://github.com/quakeroatsgriff/cs447-pushover
### Noodle Arm

### centerImg_1
/images/project-pics/cs447-games-2.png NoodleArm
### p_1
This game was made with my friend Nate, and takes inspiration from Gauntlet. Unlike Pushover, this game must be played over a network
connection with one other player. The goal of this game is to also defeat all hound and
skeleton enemies, but this time to be as fast as possible. Players start with a score of 10,000, but
it decreases over time. Each level is procedurally generated, meaning there are presets of different
room types, and the game will randomly choose rooms to connect together to form one big dungeon. The
whole map does not fit onto one screen, and thus the game utilizes screen-scrolling.
The game takes some inspiration from Dark Souls by giving the player a multitude of weapons to defeat
enemies with. The sword, spear, and club all have different attack animations, damage, range, and
attack speed values, adding some strategic depth to the game. The enemies chase the nearest player
using A*, and also attack similarly to the players with their own claw attack. When either player
runs out of health, or all enemies are destroyed, the server-side generates a new map to play on,
sends the map to the client, and begins a new game. As an additional feature, this game may be played
with a game controller. I personally used an XBox One controller when play testing.
This is the GitHub repository:
### link_1
https://github.com/quakeroatsgriff/cs447-noodle-arm https://github.com/quakeroatsgriff/cs447-noodle-arm