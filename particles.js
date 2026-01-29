import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@latest/build/backgrounds/liquid1.min.js'

const app = LiquidBackground(document.getElementById('canvas'))


const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');


let mouseX = 0;
let mouseY = 0;


let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {

  cursorDot.style.left = `${mouseX - 4}px`;
  cursorDot.style.top = `${mouseY - 4}px`;

 
  outlineX += (mouseX - outlineX) * 0.15; 
  outlineY += (mouseY - outlineY) * 0.15;
  
  cursorOutline.style.left = `${outlineX - 20}px`;
  cursorOutline.style.top = `${outlineY - 20}px`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

const links = document.querySelectorAll('a, button');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    document.body.classList.add('hovering');
    
  });
  link.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovering');
  });
});

app.liquidPlane.material.metalness = 0.8; 
app.liquidPlane.material.roughness = 0; 
app.liquidPlane.uniforms.displacementScale.value = 4;
app.setRain(false);
