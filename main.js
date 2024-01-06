const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

  const engine = Engine.create();

  const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    // width: 500,
    // height: 400,
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'transparent',
  },
});

const boxWidth = 340; // Width of the rectangles

const bowl = Bodies.rectangle(window.innerWidth / 2, window.innerHeight / 2 + 120, boxWidth, 10, { isStatic: true, render: { fillStyle: 'transparent' } });
const rightEdge = Bodies.rectangle(window.innerWidth / 2 + boxWidth / 2, window.innerHeight / 2, 10, 250, { isStatic: true, render: { fillStyle: 'transparent' } });
const leftEdge = Bodies.rectangle(window.innerWidth / 2 - boxWidth / 2, window.innerHeight / 2, 10, 250, { isStatic: true, render: { fillStyle: 'transparent' } });

const pearImage = new Image();
pearImage.src = 'images/pear.png';

const eggplantImage = new Image();
eggplantImage.src = 'images/eggplant.png';

const initialX = window.innerWidth / 2;
const initialY = -80;

const fallingPear = Bodies.rectangle(initialX, initialY, 60, 60, {
  render: {
    sprite: {
      texture: pearImage.src,
      xScale: 0.2,
      yScale: 0.2,
    },
  },
  restitution: 0.8,
  angle: Math.random() * Math.PI,
  friction: 0.7,
});


World.add(engine.world, [bowl, rightEdge, leftEdge, fallingPear]);

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
});

World.add(engine.world, mouseConstraint);
engine.world.gravity.y = 0.5;
Engine.run(engine);
Render.run(render);



















































// const bowl = Bodies.rectangle(500, 575, 340, 10, { isStatic: true, render: { fillStyle: 'black' } });
// const rightEdge = Bodies.rectangle(665, 470, 10, 250, { isStatic: true, render: { fillStyle: 'black' } });
// const leftEdge = Bodies.rectangle(345, 470, 10, 250, { isStatic: true, render: { fillStyle: 'black' } });



// const fallingPear = Bodies.rectangle(175, -80, 60, 60, {
//   render: {
//     sprite: {
//       texture: pearImage.src,
//       xScale: 0.2,
//       yScale: 0.2,
//     },
//   },
//   restitution: 0.8,
//   angle: Math.random() * Math.PI,
//   friction: 0.7,
// });











// Add the eggplant after a delay
// setTimeout(() => {
//   const fallingEggplant = Bodies.rectangle(225, -80, 60, 60, {
//     render: {
//       sprite: {
//         texture: eggplantImage.src,
//         xScale: 0.2,
//         yScale: 0.2,
//       },
//     },
//     restitution: 0.8,
//     angle: Math.random() * Math.PI,
//     friction: 0.7,
//   });

//   World.add(engine.world, fallingEggplant);

//   Matter.Events.on(engine, 'beforeUpdate', function () {
//     // Check if the falling pear has reached the bottom
//     if (fallingPear.position.y >= 550) {
//       engine.world.gravity.y = 0;
//       Matter.Body.setPosition(fallingPear, { x: 200, y: 550 });
//       fallingPear.friction = 0.9;
//     }

//     if (fallingEggplant.position.y >= 550) {
//       engine.world.gravity.y = 0;
//       Matter.Body.setPosition(fallingEggplant, { x: 250, y: 650 });
//       fallingEggplant.friction = 0.9;
//     }
//   });
// }, 1000);






















