const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

//HEAD
ctx.beginPath();
ctx.arc(200,180,60,0,2 * Math.PI);
ctx.stroke();
ctx.fill();

//BODY
ctx.beginPath();
ctx.arc(200,360,120,0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//HAT

ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(126,131,145,30);
ctx.fillRect(155,52,90,100);

//EYES
ctx.beginPath();
ctx.arc(176,176,5,2, 0.3 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(256,176,5,2, 0.3 * Math.PI);
ctx.stroke();
ctx.fill();

//SCARF
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(150,227,100,25);
ctx.fillRect(210,251,25,100);

//ARM
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';

ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(120,300);
ctx.lineTo(25,220);
ctx.stroke();

ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(270,300);
ctx.lineTo(185,225);
ctx.stroke();

//HAND
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(26,220);
ctx.lineTo(7,215);
ctx.stroke();

ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(186,225);
ctx.lineTo(167,220);
ctx.stroke();

//NOSE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(218,188);
ctx.lineTo(275, 203);
ctx.lineTo(217,214);
ctx.quadraticCurveTo(207,200,219,188);
ctx.stroke();
ctx.fill();























