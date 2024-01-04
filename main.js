// const Engine = Matter.Engine,
//   Render = Matter.Render,
//   World = Matter.World,
//   Bodies = Matter.Bodies,
//   MouseConstraint = Matter.MouseConstraint,
//   Mouse = Matter.Mouse;

//   const engine = Engine.create();

//   const render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     width: 400,
//     height: 500,
//     wireframes: false,
//     background: 'white',
//   },
// });

// const bowl = Bodies.rectangle(200, 405, 390, 10, { isStatic: true, render: { fillStyle: 'black' } });
// const rightEdge = Bodies.rectangle(390, 250, 10, 300, { isStatic: true, render: { fillStyle: 'black' } });
// const leftEdge = Bodies.rectangle(10, 250, 10, 300, { isStatic: true, render: { fillStyle: 'black' } });

// const pearImage = new Image();
// pearImage.src = 'images/pear.png';

// const eggplantImage = new Image();
// eggplantImage.src = 'images/eggplant.png';

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

// World.add(engine.world, [bowl, rightEdge, leftEdge, fallingPear]);

// const mouse = Mouse.create(render.canvas);
// const mouseConstraint = MouseConstraint.create(engine, {
//   mouse: mouse,
// });

// World.add(engine.world, mouseConstraint);

// engine.world.gravity.y = 0.5;

// Engine.run(engine);
// Render.run(render);

// // Add the eggplant after a delay
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

//     // Check if the falling eggplant has reached the bottom
//     if (fallingEggplant.position.y >= 550) {
//       engine.world.gravity.y = 0;
//       Matter.Body.setPosition(fallingEggplant, { x: 250, y: 650 });
//       fallingEggplant.friction = 0.9;
//     }
//   });
// }, 1000);



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
// context.beginPath();
// context.arc(288, 75, 70, 0, Math.PI, false);
// context.closePath();
// context.lineWidth = 5;
// context.fillStyle = 'red';
// context.fill();
// context.strokeStyle = '#550000';
// context.stroke();

context.clearRect(0, 0, canvas.width, canvas.height);

context.beginPath();
context.arc(288, 75, 150, 0, Math.PI, false);
context.closePath();
context.lineWidth = 5;
context.fillStyle = 'red';
context.fill();
context.strokeStyle = '#550000';
context.stroke();