const text = "Hola, soy Cristian 👨‍💻 Desarrollador Fullstack en formación";
let index = 0;

function type() {
  const typingElement = document.getElementById("typing-text");
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // velocidad de escritura
  }
}

document.addEventListener("DOMContentLoaded", type);


const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

for (let i = 0; i < 50; i++) {
  const angle = Math.random() * 2 * Math.PI;
  const radius = 100 + Math.random() * 50;
  particles.push({
    angle,
    radius,
    size: Math.random() * 3 + 1,
    speed: 0.01 + Math.random() * 0.02,
    color: "#00ffcc"
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.angle += p.speed;
    const x = centerX + Math.cos(p.angle) * p.radius;
    const y = centerY + Math.sin(p.angle) * p.radius;

    ctx.beginPath();
    ctx.arc(x, y, p.size, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 10;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();


window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }, 3000); // 3000 ms = 3 segundos
});