# React Poke-Platformer

React Poke-Platformer is a resizable, in-browser platformer game built with React, JavaScript, React Game Engine, and Matter.js. The project experiments with an idea I kept coming back to: what if a React app could feel less like a traditional web interface and more like a tiny handheld game console?

The result is a Pokemon-inspired side-scroller with a trainer sprite, collectible Pokeballs, generated platforms, a scrolling world, and a responsive console frame that adapts between desktop and mobile layouts.

## Project goals

The main goal was to explore game mechanics inside a React application without abandoning React's component model. I wanted the project to handle familiar platformer behavior while still keeping the rendering and UI structure understandable as React code.

That meant solving a few different problems at once:

- building a playable physics-based game loop in the browser
- rendering game entities as React components
- keeping keyboard input, sprite direction, collectibles, and UI feedback in sync
- making the game resize into a console-style layout
- combining pixel art assets into a cohesive Pokemon-inspired world

## How it works

The game is powered by **React Game Engine**, which runs a collection of systems on each tick. Those systems are responsible for reading input, applying gravity, moving the player, scrolling the level, et cetera.

**Matter.js** handles the physics of the bodies. The player, floor, walls, ceiling, platforms, and Pokeballs are all represented as Matter bodies. React components then render the visible layer for those bodies, which keeps the game split into two useful concerns: physics for behavior, React for presentation.

The core systems are:

- `KeyboardController`, which tracks WASD, arrow keys, and jump input
- `Move`, which translates input into player movement and sprite direction
- `Gravity`, which applies force and advances the Matter engine
- `Scroll`, which moves the world when the player reaches the right-side boundary

This structure made the project feel modular. Instead of one large game loop doing everything, each system owns one piece of game behavior.

## The world

The level is generated in horizontal sections that stretch across several thousand pixels. Each section creates a random set of medium platforms, then places Pokeballs above those platforms as collectibles.

When the player collides with a Pokeball, a Matter.js collision event removes that body from the physics world and dispatches a Redux action to update the bag count. This gives the game a simple reward loop: jump across platforms, collect Pokeballs, and keep moving through the scrolling environment.

The world also includes invisible boundaries:

- a floor to catch the player
- a ceiling to constrain vertical movement
- a left wall to keep the player on screen
- a right wall that acts as the scroll trigger

That right wall is the trick that creates side-scrolling behavior. The player does not move endlessly across the viewport. Instead, when the player reaches the boundary, the platforms and collectibles translate left, creating the feeling that the world is moving forward.

## Responsive console UI

One of my favorite parts of the project is the console wrapper. The game is framed inside a purple handheld-style interface with directional and action buttons.

On wider screens, the console uses a horizontal layout with controls on the left and right sides of the game window. On narrow screens, it switches into a vertical layout, placing the screen on top and the controls below it. The available game-window dimensions are calculated from the parent width and height so the game can be embedded into different page sizes.

The console controls also reflect the player's input state. When a direction or action key is pressed, Redux stores the active key press and the button display updates, making the surrounding UI feel connected to the game rather than purely decorative.

## State management

Redux Toolkit manages shared game state, including:

- total game dimensions
- current scroll position
- remaining hearts
- collected Pokeballs
- consumed physics bodies
- active key press
- sprite direction and animation frame data

For a small game, Redux might seem heavier than necessary, but it was useful here because the game loop, console UI, sprite rendering, and inventory display all need access to the same state. The store becomes the bridge between Matter.js behavior and React UI feedback.

## Visual design

The visual language is built from pixel-art assets purchased from itch.io, including nature tiles, trainer sprites, Pokemon-style overworld sprites, and console button sprites. Those assets give the project a nostalgic handheld feel while still letting the implementation stay focused on React, physics, and layout.

The game uses a forest background, tiled floor pieces, floating platforms, a trainer sprite, hearts, and Pokeballs to make the prototype feel like a complete little game world rather than a bare physics demo.

## What I learned

This project was a good reminder that React can be pushed well beyond forms, dashboards, and content pages. It is not a game engine by itself, but with the right architecture it can coordinate a surprisingly playful interactive experience.

The biggest technical lesson was separating simulation from rendering. Matter.js knows where objects are, how they collide, and how they should behave in a physical world. React knows how those objects should look. React Game Engine coordinates the update cycle between them. One of the largest and ongoing challenges was reconciling the differences between the origin of a Matter.js entity, where the entity origin is measured from center of the body, and the corresponding DOM entity rendered by React, where the origin is measured from top left.

I also learned that responsive game UI has different constraints than responsive page UI. A game window needs stable dimensions, controls need predictable placement, and the player cannot be allowed to disappear because the layout shifted. The console wrapper forced me to think about sizing as part of gameplay, not just presentation.

## Running the project

The project can be run locally with:

```bash
npm i
npm run start
```

Production and development builds are available with:

```bash
npm run build
npm run build:dev
```

## Links

- [GitHub repository](https://github.com/megbailey/react-poke-platformer)
- [React Game Engine](https://github.com/bberak/react-game-engine)
- [Matter.js](https://brm.io/matter-js/)
