const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ID = 55850;
const IDmod80 = ID % 80;
const IDmod3plus1 = (ID % 3) + 1;
const angle = (Math.PI / 2) * IDmod3plus1;


function drawShield(x, y, size, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(-size, 0);
  ctx.closePath();
  ctx.fillStyle = '#ffcc00';
  ctx.fill();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();
}


function drawButton(text, x, y) {
  ctx.beginPath();
  ctx.rect(x, y, 100, 50);
  ctx.fillStyle = '#00cc00';
  ctx.fill();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.font = '20px Arial';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 50, y + 25);
}


function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  drawShield(150, 150, 100, angle);

  // draw navigation buttons
  drawButton('Home', 20, 20);
  drawButton('Page 1', 20, 80);
  drawButton('Page 3', 20, 140);
}

draw();
